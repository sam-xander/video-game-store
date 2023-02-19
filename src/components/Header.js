import {NavLink} from "react-router-dom";
import React, { useState } from 'react';
import ContactModal from './Contactmodal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <input
          className="header__search"
          type="text"
          placeholder="Search a game"
        />
        <nav className="header__nav">
          <NavLink className="header__navLink"to="/wishlist">WishList</NavLink>
          <NavLink className="header__navLink" to="#" onClick={toggleModal}>Contact Us</NavLink>
        </nav>
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={toggleModal} />
    </header>
  );
}

export default Header;
