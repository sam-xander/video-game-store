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
          <a className="header__navLink">WishList</a>
          <a className="header__navLink">Contact Us</a>
        </nav>
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={toggleModal} />
    </header>
  );
}

export default Header;