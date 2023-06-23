import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import Loader from "../Loader/Loader";
import { useUserPerformance } from "../../utils/hooks/fetchDataAPI";
const RadarChartComponent = ({ user }) => {
  const { userPerformance, userPerformanceLoading } = useUserPerformance(
    user,
    true
  );

  if (userPerformanceLoading) {
    return <Loader />;
  }

  if (!userPerformance)
    return (
      <h2 className="error">
        Nous n&apos;avons pas réussi à récupérer les données
      </h2>
    );

  return (
    <div className="radarChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="65%"
          data={userPerformance.data.data}
        >
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarChartComponent.propTypes = {
  user: PropTypes.string.isRequired,
};
export default RadarChartComponent;
