import AsideNav from "../Components/Navigation/AsideNav";

import { useParams } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import BarChartComponent from "../Components/Charts/BarChartComponent";
import LineChartComponent from "../Components/Charts/LineChartComponent";
import RadarChartComponent from "../Components/Charts/RadarChartComponent";
import RadialBarComponent from "../Components/Charts/RadialBarComponent";
import DetailsCard from "../Components/Charts/DetailsCard";
import Header from "../Components/Header";
import { useUserData } from "../utils/hooks/fetchDataAPI";

const Dashboard = () => {
  const { user } = useParams("/user");

  const { userData, userDataLoading } = useUserData(user, true);

  const userDetails = ["calories", "proteines", "glucides", "lipides"];

  return (
    <>
      <Header />
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
                <BarChartComponent user={user} />
              </div>
              <div className="graph__aside">
                <LineChartComponent user={user} />
                <RadarChartComponent user={user} />
                <RadialBarComponent user={user} />
              </div>
            </div>
            <aside className="container__data--stats">
              {userDetails.map((detail) => (
                <DetailsCard key={detail} data={userData} detail={detail} />
              ))}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
