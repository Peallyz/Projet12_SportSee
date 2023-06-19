import PropTypes from "prop-types";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import Loader from "../Loader/Loader";
const RadarChartComponent = ({ data, loading }) => {
  if (loading || !data) {
    return <Loader />;
  }

  return (
    <RadarChart outerRadius={90} width={260} height={265} data={data.data.kind}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Lily"
        data={data.data.data}
        dataKey="value"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};

RadarChartComponent.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default RadarChartComponent;
