import PropTypes from "prop-types";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import Loader from "../Loader/Loader";

const RadialBarComponent = ({ data, loading }) => {
  if (loading || !data) {
    return <Loader />;
  }

  const score = { score: data.data.todayScore || data.data.score };

  return (
    <div className="pieChart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={score}
          startAngle={0}
          endAngle={360}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={160}
            fill="#FFF"
          />
          <RadialBar
            dataKey="score"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p>
        <span>
          {score.score * 100}%<br />
        </span>
        de votre
        <br /> objectif
      </p>
    </div>
  );
};

RadialBarComponent.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
};

export default RadialBarComponent;
