import { NavLink } from "react-router-dom";
import MainNav from "./Navigation/MainNav";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={logo} alt="Logo de sportsee" />
      </NavLink>

      <MainNav />
    </header>
  );
};

export default Header;
