import { useState } from "react";
import Modal from "./components/Modal";
import SearchForm from "./components/SearchForm";

function App() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className="container">
      <h1 className="title">
        Поисковик книг
      </h1>
      <SearchForm toggleModal={toggleModal} />
      {showModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
