import { NavLink } from "react-router-dom";
import MainNav from "./Navigation/MainNav";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className={"logo"}>
        <img src="/../src/assets/logo.svg" alt="Logo de sportsee" />
      </NavLink>

      <MainNav />
    </header>
  );
};

export default Header;
