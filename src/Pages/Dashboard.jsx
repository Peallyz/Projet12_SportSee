import { useContext } from "react";
import AsideNav from "../Components/Navigation/AsideNav";
import { DataContext } from "../utils/context/ContextProvider";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import BarChartComponent from "../Components/Charts/BarChartComponent";
import LineChartComponent from "../Components/Charts/LineChartComponent";
import RadarChartComponent from "../Components/Charts/RadarChartComponent";
import RadialBarComponent from "../Components/Charts/RadialBarComponent";

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
              Bonjour <strong>{userData?.data.userInfos.firstName}</strong>
            </span>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </h1>
        )}
        <div className="container__data">
          <div className="container__data--graph">
            <div className="graph__main">
              <BarChartComponent
                data={userActivity}
                loadind={userActivityLoading}
              />
            </div>
            <div className="graph__aside">
              <LineChartComponent
                data={userAverageSessions}
                loading={userAverageSessionsLoading}
              />
              <RadarChartComponent
                data={userPerformance}
                loading={userPerformanceLoading}
              />
              <RadialBarComponent
                data={userData}
                loading={userPerformanceLoading}
              />
            </div>
          </div>
          <aside className="container__data--stats"></aside>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
