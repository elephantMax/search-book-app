const Snippet = ({toggleModal}) => {
    return (
        <li className="snippet" onClick={toggleModal}>
            <img className="snippet__image" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Snippet" />
            <strong className="snippet__title">
                Title
            </strong>
            <span className="snippet__author" >
                Author
            </span>
        </li>
    );
}

export default Snippet;