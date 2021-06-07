import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('books/fetchByTitle', async (title) => {
    const response = await fetch(`http://openlibrary.org/search.json?title=${title}`)
    const data = await response.json()
    return data.docs || []
})

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.books = action.payload
            state.loading = false
        }
    }
})

export const { setLoading } = bookSlice.actions

export default bookSlice.reducer
