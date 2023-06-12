import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const AsideLink = ({ img, path }) => {
  return (
    <li>
      <NavLink to={`/${path}`}>
        <img src={img.url} alt={img.alt} />
      </NavLink>
    </li>
  );
};

AsideLink.propTypes = {
  img: PropTypes.object,
  path: PropTypes.string,
};

export default AsideLink;
