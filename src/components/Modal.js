import { useSelector, useDispatch } from "react-redux";
import { setBook } from "../store/slices/bookSlice";
import failImage from '../no-image.svg'
import { useState } from "react";

const Modal = ({ toggleModal }) => {
    const book = useSelector(s => s.book.book)
    const dispatch = useDispatch()
    const [imgLoaded, setImgLoaded] = useState(false)

    const image = book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : failImage

    const clickHandler = () => {
        toggleModal()
        dispatch(setBook(null))
    }

    return (
        <div className="modal">
            <div className="modal__window container">
                <div className="modal__header">
                    <h1>Информация о книге</h1>
                </div>
                <div className="modal__body">


                    <div className="book">
                        <img className="book__image" src={image} alt="snippet" onLoad={() => setImgLoaded(true)} />
                        {!imgLoaded && <p>Загрузка...</p>}
                        {imgLoaded && (
                            <ul className="book__details">
                                <li className="book__detail">
                                    Название: {book.title}
                                </li>
                                <li className="book__detail">
                                    Автор: {book.author_name}
                                </li>
                                <li className="book__detail">
                                    Год издания: {book.first_publish_year}
                                </li>
                                <li className="book__detail">
                                    Издатель: {book.publisher[0]}
                                </li>
                                <li className="book__detail">
                                    ISBN {book.isbn[0]}
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="modal__footer">
                    <button className="btn btn-grey" onClick={clickHandler}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;