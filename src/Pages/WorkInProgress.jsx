import { NavLink } from "react-router-dom";
import AsideNav from "../Components/Navigation/AsideNav";
import { useParams } from "react-router-dom";

const WorkInProgress = () => {
  const { user } = useParams();
  return (
    <main>
      <AsideNav />
      <div className="wip">
        <h1>
          Désolé, cette page est en cours de création. Revenez plus tard pour
          découvrir le reste des fonctionnalités
        </h1>
        <NavLink to={`/${user}`}>Revenir sur votre Dashboard</NavLink>
      </div>
    </main>
  );
};

export default WorkInProgress;
