import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UserSelect = ({ data, setPath }) => {
  console.log(data);
  return (
    <div>
      <NavLink to={`/${data.data.id}`} onClick={() => setPath(data.data.id)}>
        Choisir : {data.data.userInfos.firstname} {data.data.userInfos.lastname}
      </NavLink>
    </div>
  );
};

UserSelect.propTypes = {
  data: PropTypes.object,
  setPath: PropTypes.func,
};

export default UserSelect;
