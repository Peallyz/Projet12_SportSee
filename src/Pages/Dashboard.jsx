import { useContext } from "react";
import AsideNav from "../Components/Navigation/AsideNav";
import { DataContext } from "../utils/context/ContextProvider";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const Dashboard = () => {
  const Store = useContext(DataContext);
  const { user } = useParams("/user");

  const [userData, userDataLoading] = Store.data.useUserData(user);
  const [userActivity, userActivityLoading] = Store.data.useUserActivity(user);
  const [userPerformance, userPerformanceLoading] =
    Store.data.useUserPerformance(user);
  const [userAverageSessions, userAverageSessionsLoading] =
    Store.data.useUserAverageSessions(user);

  return (
    <main className="dashboard">
      <AsideNav />
      <div className="container">
        {userDataLoading ? (
          <Loader />
        ) : (
          <h1>
            <span>
              Bonjour <strong>{userData.data.userInfos.firstName}</strong>
            </span>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h1>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
