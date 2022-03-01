import "./nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavSecond() {
  // const [openMenu, setOpenMenu] = useState(false);

  const [openSecondMenu, setOpenSecondMenu] = useState(false);

  return (
    <>
      <div className="nav-second__menu-items">
        <Link
          className="nav-second__subMenu"
          to="/services/automatisation"
          // onClick={() => setOpenMenu(!openMenu)}
        >
          Автоматизация
        </Link>
        <Link
          className="nav-second__subMenu"
          to="/services/apps"
          // onClick={() => setOpenMenu(!openMenu)}
        >
          Приложения
        </Link>
        <Link
          className="nav-second__subMenu"
          to="/services/outsoursing"
          // onClick={() => setOpenMenu(!openMenu)}
        >
          IT-аутсорсинг
        </Link>
      </div>
    </>
  );
}

export default NavSecond;
