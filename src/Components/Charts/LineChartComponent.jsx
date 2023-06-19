import PropTypes from "prop-types";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import Loader from "../Loader/Loader";
const LineChartComponent = ({ data, loading }) => {
  if (loading || !data) {
    return <Loader />;
  }
  return (
    <LineChart width={260} height={265} data={data.data.sessions}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
  );
};

LineChartComponent.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default LineChartComponent;
