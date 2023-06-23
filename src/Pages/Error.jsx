import { NavLink } from "react-router-dom";
import AsideNav from "../Components/Navigation/AsideNav";
import Header from "../Components/Header";
const Error = () => {
  return (
    <>
      <Header />
      <main>
        <AsideNav />
        <div className="errorPage">
          <h1>Désolé, cette page n&apos;existe pas.</h1>
          <NavLink to={"/"}>Revenir au choix des utilisateurs</NavLink>
        </div>
      </main>
    </>
  );
};

export default Error;
