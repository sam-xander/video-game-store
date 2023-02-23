import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import ContactModal from "./Contactmodal";
import Modal from "react-modal";
import { RocketLaunchIcon, Bars2Icon } from "@heroicons/react/24/solid";

// Set the app element for react-modal
Modal.setAppElement(document.body);

function Header({
  userInput,
  isMenuOpen,
  toggleMenu,
  handleChange,
  handleSubmit,
}) {
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
        <form className="header__form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={userInput}
            className="header__search"
            type="text"
            placeholder="Search a game"
          />
          <button className="header__button">&gt;</button>
        </form>
        <nav className="header__nav">
          <NavLink
            className="header__navLink"
            to="/wishlist"
            activeclassname="active"
          >
            WishList
          </NavLink>
          <Link className="header__navLink" to="#" onClick={toggleModal}>
            Contact Us
          </Link>
        </nav>

        {isMenuOpen === false && (
          <Bars2Icon onClick={toggleMenu} className="header__menuIcon" />
        )}
      </div>
      <ContactModal isOpen={isModalOpen} onRequestClose={toggleModal} />
    </header>
  );
}

export default Header;
