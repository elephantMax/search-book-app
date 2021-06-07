import SnippetList from "./SnippetList"
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, setLoading } from '../store/slices/bookSlice'

const SearchForm = ({ toggleModal }) => {
    const dispatch = useDispatch()
    const loading = useSelector((s) => s.book.loading)
    const books = useSelector((s) => s.book.books)

    let timeout = null

    const handleChane = (e) => {
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            dispatch(fetchUsers(e.target.value))
            dispatch(setLoading(true))
        }, 1000)
    }

    return (
        <form className="form">
            <div className="form__search-field">
                <input className="form__input" placeholder="Введите название книги" type="text" onChange={handleChane} />
                <button className="btn">Найти</button>
            </div>
            {loading && <p>Загрузка</p>}
            { books.length && !loading ? <SnippetList toggleModal={toggleModal} books={books} /> : <p>Книг не найдено</p>}
        </form>
    );
}

export default SearchForm;