import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useUserData } from "../../utils/hooks/fetchDataAPI";

const UserSelect = ({ user }) => {
  const { userData, userDataLoading } = useUserData(user);
  if (userDataLoading) return <Loader />;

  if (!userData)
    return (
      <h2 className="error">
        Nous n&apos;avons pas réussi à récupérer les données
      </h2>
    );

  return (
    <NavLink to={`/${userData.data.id}`}>
      <span>{userData.data.userInfos.firstName}</span>
      <span className="lastname">{userData.data.userInfos.lastName}</span>
      <span>Utilisateur : {userData.data.id}</span>
    </NavLink>
  );
};

UserSelect.propTypes = {
  user: PropTypes.number.isRequired,
};

export default UserSelect;
