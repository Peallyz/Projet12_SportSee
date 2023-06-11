import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import AsideNav from "../Components/Navigation/AsideNav";

const WorkInProgress = ({ path }) => {
  return (
    <main>
      <AsideNav />
      <h1>
        Désolé, cette page est en cours de création. Revnez plus tard pour
        découvrir le reste des fonctionnalités
      </h1>
      <NavLink to={`/${path}`}>Revenir sur votre Dashboard</NavLink>
    </main>
  );
};

WorkInProgress.propTypes = {
  path: PropTypes.string,
};

export default WorkInProgress;
