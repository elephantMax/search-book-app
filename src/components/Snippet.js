import failImage from '../no-image.svg'

const Snippet = ({toggleModal, book}) => {
    const { title, author_name } = book
    const image = book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg` : failImage
    return (
        <li className="snippet" onClick={toggleModal}>
            <img className="snippet__image" src={image} alt="Snippet" />
            <strong className="snippet__title">
                {title}
            </strong>
            <span className="snippet__author" >
                {author_name}
            </span>
        </li>
    );
}

export default Snippet;