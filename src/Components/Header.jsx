import { useParams } from "react-router-dom";
import MainNav from "./Navigation/MainNav";

const Header = () => {
  const path = useParams();
  console.log(path);

  return (
    <header>
      <img src="../src/assets/logo.svg" alt="Logo de sportsee" />
      <MainNav user={path.user} />
    </header>
  );
};

export default Header;
