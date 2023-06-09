import { useUserData } from "../utils/hooks/fetchDataAPI";
import UserSelect from "../Components/UserSelect/UserSelect";

const Home = () => {
  const [firstUser, firstLoading] = useUserData(12, true);
  const [secondUser, secondLoading] = useUserData(18, true);
  return (
    <main>
      {!firstLoading ? <UserSelect data={firstUser} /> : ""}
      {!secondLoading ? <UserSelect data={secondUser} /> : ""}
    </main>
  );
};

export default Home;
