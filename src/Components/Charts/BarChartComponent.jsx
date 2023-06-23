import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loader from "../Loader/Loader";
import BarChartTooltip from "./BarChartTooltip";
import { useUserActivity } from "../../utils/hooks/fetchDataAPI";

const BarChartComponent = ({ user }) => {
  const { userActivity, userActivityLoading } = useUserActivity(user, true);

  if (userActivityLoading) {
    return <Loader />;
  }

  if (!userActivity)
    return (
      <h2 className="error">
        Nous n&apos;avons pas réussi à récupérer les données
      </h2>
    );

  return (
    <>
      <div className="description">
        <h3>Activité quotidienne</h3>
        <div className="legend">
          <div className="legend__details">
            <span className="icon icon__black"></span>
            <p>Poids (kg)</p>
          </div>
          <div className="legend__details">
            <span className="icon icon__red"></span>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={210}>
        <BarChart
          data={userActivity.data.sessions}
          barGap={8}
          barCategoryGap={1}
          fillOpacity={0.5}
        >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount="5"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip content={<BarChartTooltip />} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
            fillOpacity={1}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
            fillOpacity={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

BarChartComponent.propTypes = {
  user: PropTypes.string.isRequired,
};
export default BarChartComponent;
