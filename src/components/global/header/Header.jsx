import "./header.scss";
// import { Link } from "react-router-dom";
// import menuImg from "../global-img/menu.svg";
import logo from "../global-img/logo.svg";
import youtubeLogo from "../global-img/youtube.svg";
import facebookLogo from "../global-img/facebook.svg";

import telegramLogo from "../global-img/telegram.svg";
import { useState, useRef } from "react";
import { Nav, NavSecond } from "../../components";

import Menulinks from "../menulinks/Menulinks";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSecondMenu, setOpenSecondMenu] = useState(false);
  // const menuClose = useRef();

  function menuSlider() {
    setOpenMenu(!openMenu);
  }

  return (
    // <body ref={menuClose} onClick={menuSlider}>
    <header className="header">
      <div className="nav">
        <nav
          className={
            openMenu ? "nav__toggler nav__toggler-open" : "nav__toggler"
          }
          onClick={menuSlider}
        >
          <div
            className={openMenu ? "nav__menu nav__menu-vision" : "nav__menu"}
          >
            <Nav />
          </div>
          {/* <div
          className={
            openSecondMenu ? "second-menu second-menu-vision" : "second-menu"
          }
          >
            <NavSecond />
          </div> */}
        </nav>
        <div className="logo">
          <a href="/main">
            <img className="logo-img" src={logo} alt="Logo" />
          </a>
        </div>
      </div>

      {/*<div className="contact-menu">
        <div className="social-links">
          <a href="/">
            <div className="social-items">
              <img src={youtubeLogo} alt="youtubeLogo" />
            </div>
          </a>

          <a href="/">
            <div className="social-items">
              <img src={facebookLogo} alt="facebookLogo" />
            </div>
          </a>

          <a href="/">
            <div className="social-items">
              <img src={telegramLogo} alt="telegramLogo" />
            </div>
          </a>
        </div>
        <div className="contacts">
          <a href="tel:+996312000000">+996 312 000 000</a>
    </div>

    

        </div>*/}
      <Menulinks />
      <nav className="second__menu"></nav>
    </header>
    // </body>
  );
}

export default Header;
