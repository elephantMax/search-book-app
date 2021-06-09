import SnippetList from "./SnippetList"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, setLoading, setBooks } from '../store/slices/bookSlice'
import { useRef } from "react"

const SearchForm = ({ toggleModal }) => {
    const dispatch = useDispatch()
    const loading = useSelector((s) => s.book.loading)
    const books = useSelector((s) => s.book.books)
    const searchInput = useRef(null)

    let timeout = null

    const searchBooks = () => {
        dispatch(setLoading(true))
        dispatch(fetchBooks(searchInput.current.value))
    }

    const handeSubmit = (e) => {
        e.preventDefault()
        searchBooks()
    }

    const handleChange = () => {
        dispatch(setBooks(null))
        if (timeout) {
            timeout = clearTimeout(timeout)
        }
        timeout = setTimeout(searchBooks, 1000)
    }

    return (
        <form className="form" onSubmit={handeSubmit}>
            <div className="form__search-field">
                <input className="form__input" placeholder="Введите название книги" type="text" ref={searchInput} onChange={handleChange} />
                <button className="btn">Найти</button>
            </div>
            {loading && <p>Загрузка</p>}
            {books && <SnippetList toggleModal={toggleModal} books={books} />}
        </form>
    );
}

export default SearchForm;