import "./nav.scss";
import { Link } from "react-router-dom";
//import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { NavSecond } from "../../components";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const [openSecondMenu, setOpenSecondMenu] = useState(false);

  return (
    // <div className="nav__menu-items">
    //   <HashLink className="subMenu" to="#main" onClick={menuSlider}>
    //     Главная
    //   </HashLink>
    //   <HashLink className="subMenu" to="#services" onClick={menuSlider}>
    //     Services
    //   </HashLink>
    //   <HashLink className="subMenu" to="#contacts" onClick={menuSlider}>
    //     Contacts
    //   </HashLink>
    //   <HashLink className="subMenu" to="#about" onClick={menuSlider}>
    //     About
    //   </HashLink>
    // </div>
    <>
      <div className="nav__menu-items">
        <Link
          className="subMenu"
          to="/orion-project"
          onClick={() => setOpenMenu(!openMenu)}
        >
          Главная
        </Link>
        <Link
          className="subMenu"
          to="/services"
          onMouseEnter={() => setOpenSecondMenu(true)}
          onMouseLeave={() =>
            setTimeout(() => {
              setOpenSecondMenu(false);
            }, 5000)
          }
          // onClick={() => setOpenSecondMenu(false)}
          // onClick={() => setOpenMenu(false)}
        >
          Наши услуги
        </Link>

        <Link
          className="subMenu"
          to="/about"
          onClick={() => setOpenMenu(!openMenu)}
        >
          About
        </Link>
      </div>
      <div
        className={
          openSecondMenu ? "second-menu second-menu-vision" : "second-menu"
        }
        // onMouseEnter={() => setOpenSecondMenu(true)}
      >
        <NavSecond />
      </div>
    </>
  );
}

export default Nav;
