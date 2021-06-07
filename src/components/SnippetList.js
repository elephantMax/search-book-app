import Snippet from "./Snippet"

const SnippetList = ({toggleModal}) => {
    return (
        <ul className="form__snippets snippets">
            <h3>Найденные результаты:</h3>
            <Snippet toggleModal={toggleModal} />
        </ul>
    );
}

export default SnippetList;