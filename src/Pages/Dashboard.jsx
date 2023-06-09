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
import iconCalories from "../assets/calories-icon.svg";
import iconProteines from "../assets/proteines-icon.svg";
import iconGlucides from "../assets/glucides-icon.svg";
import iconLipides from "../assets/lipides-icon.svg";

const Dashboard = () => {
  const { user } = useParams("/user");
  // fetch data from API with custom hook using useFetch with userID. useCustomHooks(id: number or string, isMocked: boolean with false has default value)
  const { userData, userDataLoading } = useUserData(user);

  const userDetails = [
    { icon: iconCalories, type: "calories" },
    { icon: iconProteines, type: "proteines" },
    { icon: iconGlucides, type: "glucides" },
    { icon: iconLipides, type: "lipides" },
  ];

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
                <DetailsCard
                  key={detail.type}
                  data={userData}
                  detail={detail}
                />
              ))}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
