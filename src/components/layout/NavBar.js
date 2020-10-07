import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Logo = styled(Link)`
  font-family: "POKEMON FONT";
  color: #ffcc07 !important;
  text-shadow: -3px -3px 0 #3069ab, 3px -3px 0 #3069ab, -3px 3px 0 #3069ab,
    3px 3px 0 #3069ab;
  transform: rotate(-10deg);
  margin-bottom: 12px;
  max-width: 125px;
`;

const NavBar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Logo
        to={"/"}
        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
      >
        Pokedex
      </Logo>{" "}
      <button
        class="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={"/gen1"}>
              Gen1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/gen2"}>
              Gen2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/gen3"}>
              Gen3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/gen4"}>
              Gen4
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/gen5"}>
              Gen5
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/gen6"}>
              Gen6
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/gen7"}>
              Gen7
            </Link>
          </li>
        </ul>
      </div>
      <form class="form-inline my-2 my-lg-0">
        <SearchBox
          className="float-right form-control mr-sm-2"
          searchfield={props.searchfield}
        />
      </form>
    </nav>
  );
};

export default NavBar;
