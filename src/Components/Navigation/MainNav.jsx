import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

const MainNav = () => {
  // const { user } = useParams();
  const { pathname } = useLocation();
  console.log();

  if (pathname.split("/")[1] === "") {
    return <h1>Home</h1>;
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/${pathname.split("/")[1]}`}>Acceuil</NavLink>
        </li>
        <li>
          <NavLink to={`/${pathname.split("/")[1]}/profile`}>Profil</NavLink>
        </li>
        <li>
          <NavLink to={`/${pathname.split("/")[1]}/settings`}>Réglages</NavLink>
        </li>
        <li>
          <NavLink to={`/${pathname.split("/")[1]}/community`}>
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
