import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import ContactModal from "./Contactmodal";
import Modal from "react-modal";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

// Set the app element for react-modal
Modal.setAppElement(document.body);

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo" to="/">
          <h1 className="sidebar__logo">
            PLAYTIME
            <span>
              PALACE
              <RocketLaunchIcon className="sidebar__logoIcon" />
            </span>
          </h1>
        </Link>
        <input
          className="header__search"
          type="text"
          placeholder="Search a game"
        />
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
        <button></button>
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={toggleModal} />
    </header>
  );
}

export default Header;
