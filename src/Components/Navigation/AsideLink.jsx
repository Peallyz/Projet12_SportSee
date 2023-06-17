import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";

const AsideLink = ({ img }) => {
  const { user } = useParams();
  return (
    <>
      <NavLink to={`/${user}`}>
        <img src={img.url} alt={img.alt} />
      </NavLink>
    </>
  );
};

AsideLink.propTypes = {
  img: PropTypes.object,
};

export default AsideLink;
