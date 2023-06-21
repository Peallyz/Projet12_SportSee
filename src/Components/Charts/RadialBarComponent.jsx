import PropTypes from "prop-types";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import Loader from "../Loader/Loader";

const RadialBarComponent = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  }

  if (!data)
    return (
      <h2 className="error">
        Nous n&apos;avons pas réussi à récupérer les données
      </h2>
    );

  const score = [{ name: "score", value: data.data.formatedScore }];
  return (
    <div className="radialChart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={score}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={160}
            fill="#FFF"
          />
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p>
        <span>
          {score[0].value * 100}%<br />
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
