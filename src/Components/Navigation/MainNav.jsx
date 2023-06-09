import { NavLink } from "react-router-dom";
import Proptypes from "prop-types";

const MainNav = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/${user}`}>Acceuil</NavLink>
        </li>
        <li>
          <NavLink to={`/${user}/profile`}>Profil</NavLink>
        </li>
        <li>
          <NavLink to={`/${user}/settings`}>Réglages</NavLink>
        </li>
        <li>
          <NavLink to={`/${user}/community`}>Communauté</NavLink>
        </li>
      </ul>
    </nav>
  );
};
MainNav.proptypes = {
  user: Proptypes.string,
};
export default MainNav;
