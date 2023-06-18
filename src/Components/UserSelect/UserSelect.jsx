import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../utils/context/ContextProvider";
import Loader from "../Loader/Loader";

const UserSelect = ({ user }) => {
  const Store = useContext(DataContext);

  const [data, loading] = Store.data.useUserData(user);

  return !loading ? (
    <NavLink to={`/${data.data.id}`}>
      <span>{data.data.userInfos.firstName}</span>
      <span className="lastname">{data.data.userInfos.lastName}</span>
      <span>Utilisateur : {data.data.id}</span>
    </NavLink>
  ) : (
    <Loader />
  );
};

UserSelect.propTypes = {
  user: PropTypes.number.isRequired,
};

export default UserSelect;
