import { useUserData } from "../utils/hooks/fetchDataAPI";
import UserSelect from "../Components/UserSelect/UserSelect";
import PropTypes from "prop-types";

const Home = ({ setPath }) => {
  const [firstUser, firstLoading] = useUserData(12, true);
  const [secondUser, secondLoading] = useUserData(18, true);
  return (
    <main>
      {!firstLoading ? (
        <UserSelect data={firstUser} setPath={setPath} />
      ) : (
        "nope"
      )}
      {!secondLoading ? (
        <UserSelect data={secondUser} setPath={setPath} />
      ) : (
        "nope"
      )}
    </main>
  );
};

Home.propTypes = {
  setPath: PropTypes.func,
};

export default Home;
