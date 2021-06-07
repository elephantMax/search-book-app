import SnippetList from "./SnippetList"

const SearchForm = ({toggleModal}) => {
    return (
        <form className="form">
            <div className="form__search-field">
                <input className="form__input" placeholder="Введите название книги" type="text" />
                <button className="btn">Найти</button>
            </div>
            <SnippetList toggleModal={toggleModal} />
        </form>
    );
}

export default SearchForm;