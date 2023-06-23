import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loader from "../Loader/Loader";
import LineChartTooltip from "./LineChartTooltip";
import { useUserAverageSessions } from "../../utils/hooks/fetchDataAPI";

const LineChartComponent = ({ user }) => {
  // fetch data from API with custom hook using useFetch with userID. useCustomHooks(id: number or string, isMocked: boolean with false has default value)
  const { userAverageSessions, userAverageSessionsLoading } =
    useUserAverageSessions(user);

  if (userAverageSessionsLoading) {
    return <Loader />;
  }

  if (!userAverageSessions)
    return (
      <h2 className="error">
        Nous n&apos;avons pas réussi à récupérer les données
      </h2>
    );
  return (
    <div className="lineChart">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userAverageSessions.data.sessions}
          strokeWidth={0.4}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let container = document.querySelector(
                ".lineChart .recharts-surface"
              );
              let MousePosInPercent = Math.round(
                (e.activeCoordinate.x / container.clientWidth) * 100
              );
              container.style.background = `linear-gradient(90deg, rgba(0,0,0,0) ${MousePosInPercent}%, rgba(200,0,0,0.75) ${MousePosInPercent}%, rgba(200,0,0,0.75) 100%)`;
            }
          }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            tick={{ fontSize: 12, stroke: "white", opacity: 0.8 }}
            padding={{ right: 10, left: 10 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={["dataMin - 10", "dataMax + 25"]}
            hide={true}
          />
          <Tooltip content={<LineChartTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 2, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineChartComponent.propTypes = {
  user: PropTypes.string.isRequired,
};
export default LineChartComponent;
