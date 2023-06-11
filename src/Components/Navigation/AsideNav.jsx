import { PropTypes } from "prop-types";
import AsideLink from "./AsideLink";

const AsideNav = ({ path }) => {
  const imgs = [
    { url: "/src/assets/iconMedidation.svg", alt: "Meditation" },
    { url: "/src/assets/iconSwiming.svg", alt: "Natation" },
    { url: "/src/Assets/iconBike.svg", alt: "Vélo" },
    { url: "/src/assets/iconDumbBell.svg", alt: "Musculation" },
  ];
  return (
    <nav className="aside__nav">
      <ul>
        {imgs.map((img) => {
          <li>
            <AsideLink img={img} path={path} />
          </li>;
        })}
      </ul>
    </nav>
  );
};

AsideNav.propTypes = {
  path: PropTypes.string,
};

export default AsideNav;
