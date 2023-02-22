import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ContactModal from "./Contactmodal";
import Modal from "react-modal";

// Set the app element for react-modal
Modal.setAppElement(document.body);

function Header({ userInput, setUserInput, setData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const API_KEY = "6d6f10f340174b0689ca620ab0119ffb";
  const navigate = useNavigate()
  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${userInput}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
      navigate('/search')
  }
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <form onSubmit={handleSubmit}>
        <input
        onChange={handleChange}
        value={userInput}
          className="header__search"
          type="text"
          placeholder="Search a game"
        />
        </form>
        <nav className="header__nav">
          <NavLink
            className="header__navLink"
            to="/wishlist"
            activeClassName="active"
          >
            WishList
          </NavLink>
          <Link className="header__navLink" to="#" onClick={toggleModal}>
            Contact Us
          </Link>
        </nav>
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={toggleModal} />
    </header>
  );
}

export default Header;