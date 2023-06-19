import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loader from "../Loader/Loader";

const BarChartComponent = ({ data, loading }) => {
  if (loading || !data) {
    return <Loader />;
  }
  return (
    <BarChart width={835} height={320} data={data.data.sessions}>
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="kilogram" fill="#000000" />
      <Bar dataKey="calories" fill="#E60000" />
    </BarChart>
  );
};

BarChartComponent.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default BarChartComponent;
