import Snippet from "./Snippet"

const SnippetList = ({toggleModal, books}) => {
    return (
        <ul className="form__snippets snippets">
            <h3>Найденные результаты:</h3>
            {books.map((book) => <Snippet key={book.key} toggleModal={toggleModal} book={book} />) } 
        </ul>
    );
}

export default SnippetList;