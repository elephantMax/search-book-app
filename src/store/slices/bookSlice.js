import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

let controller = null

export const fetchBooks = createAsyncThunk('books/fetchByTitle', async (title) => {
    if (controller) {
        controller.abort()
    }
    controller = new AbortController()
    const { signal } = controller
    if (!title) {
        controller.abort()
        return null
    }
    try {
        const response = await fetch(`http://openlibrary.org/search.json?title=${title}`, { signal })
        const data = await response.json()
        return data.docs || []
    } catch (error) {
        console.log('fetch aborted');
        return null
    }
})

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: null,
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setBooks: (state, action) => {
            state.books = action.payload
        }
    },
    extraReducers: {
        [fetchBooks.fulfilled]: (state, action) => {
            state.books = action.payload
            state.loading = false
        }
    }
})

export const { setLoading, setBooks } = bookSlice.actions

export default bookSlice.reducer
