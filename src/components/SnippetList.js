import Snippet from "./Snippet"

const SnippetList = ({ toggleModal, books }) => {
    return (
        <ul className="form__snippets snippets">
            <h3>Найденные результаты:</h3>
            <div className="snippet">
                <strong>Обложка</strong>
                <strong className="snippet__title">Название</strong>
                <strong>Автор</strong>
            </div>
            {books.length ? books.map((book) => <Snippet key={book.key} toggleModal={toggleModal} book={book} />) : <p>Книги не найдены</p>}
        </ul>
    );
}

export default SnippetList;