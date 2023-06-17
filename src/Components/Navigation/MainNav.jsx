import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const MainNav = () => {
  const { user } = useParams();

  if (!user) {
    return <h1>Home</h1>;
  }

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

export default MainNav;
