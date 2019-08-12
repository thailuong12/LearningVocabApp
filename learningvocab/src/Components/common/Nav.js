import React, { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [page, setPage] = useState("");
  const setNavPage = p => {
    if (p === "vocab") {
      setPage("vocab");
    } else {
      setPage("writing");
    }
  };
  const getActiveStatus = p => {
    if (p === page) {
      return "active";
    }
  };
  return (
    <nav className="Nav">
      <ul>
        <li
          className={getActiveStatus("vocab")}
          onClick={() => setNavPage("vocab")}
        >
          <Link to="/vocab">Vocabulary</Link>
        </li>
        <li
          className={getActiveStatus("writing")}
          onClick={() => setNavPage("writing")}
        >
          <Link to="/writing">Writing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
