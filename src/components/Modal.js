const Modal = ({toggleModal}) => {
    return (
        <div className="modal">
            <div className="modal__window container">
                <div className="modal__header">
                    <h1>Информация о книге</h1>
                </div>
                <div className="modal__body">
                    <div className="book">
                        <img className="book__image" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="snippet" />
                        <ul className="book__details">
                            <li className="book__detail">
                                Title
                            </li>
                            <li className="book__detail">
                                Author
                            </li>
                            <li className="book__detail">
                                Date
                            </li>
                            <li className="book__detail">
                                Издатель
                            </li>
                            <li className="book__detail">
                                ISBN
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="modal__footer">
                    <button className="btn btn-grey" onClick={toggleModal}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;