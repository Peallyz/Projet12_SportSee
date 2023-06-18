import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { useParams } from "react-router-dom";

const MainNav = () => {
  // const { user } = useParams();
  const userPage = useMatch("/:user/*");
  const navigate = useNavigate();
  useEffect(() => {
    if (userPage?.params?.user != "12" && userPage?.params?.user != "18") {
      navigate("/error");
    }
  }, []);

  if (!userPage?.params?.user || userPage?.pathnameBase === "/error") {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/${userPage.params.user}`}>Acceuil</NavLink>
        </li>
        <li>
          <NavLink to={`/${userPage.params.user}/profile`}>Profil</NavLink>
        </li>
        <li>
          <NavLink to={`/${userPage.params.user}/settings`}>Réglages</NavLink>
        </li>
        <li>
          <NavLink to={`/${userPage.params.user}/community`}>
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
