import PropTypes from "prop-types";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import Loader from "../Loader/Loader";
import { useUserData } from "../../utils/hooks/fetchDataAPI";

const RadialBarComponent = ({ user }) => {
  // fetch data from API with custom hook using useFetch with userID. useCustomHooks(id: number or string, isMocked: boolean with false has default value)
  const { userData, userDataLoading } = useUserData(user);

  if (userDataLoading) {
    return <Loader />;
  }

  if (!userData)
    return (
      <h2 className="error">
        Nous n&apos;avons pas réussi à récupérer les données
      </h2>
    );

  const score = [{ name: "score", value: userData.data.formatedScore }];
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
  user: PropTypes.string.isRequired,
};

export default RadialBarComponent;
