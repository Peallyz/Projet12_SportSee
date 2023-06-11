import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UserSelect = ({ data, setPath }) => {
  return (
    <NavLink to={`/${data.data.id}`} onClick={() => setPath(data.data.id)}>
      <span>{data.data.userInfos.firstName}</span>
      <span className="lastname">{data.data.userInfos.lastName}</span>
      <span>Utilisateur : {data.data.id}</span>
    </NavLink>
  );
};

UserSelect.propTypes = {
  data: PropTypes.object,
  setPath: PropTypes.func,
};

export default UserSelect;
