import { PropTypes } from "prop-types";
import AsideLink from "./AsideLink";

const AsideNav = () => {
  const imgs = [
    { url: "/src/assets/iconMeditation.svg", alt: "Meditation" },
    { url: "/src/assets/iconSwiming.svg", alt: "Natation" },
    { url: "/src/Assets/iconBike.svg", alt: "Vélo" },
    { url: "/src/assets/iconDumbBell.svg", alt: "Musculation" },
  ];
  return (
    <nav className="aside__nav">
      <ul>
        {imgs.map((img) => (
          <li key={img.alt}>
            <AsideLink img={img} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

AsideNav.propTypes = {
  path: PropTypes.string,
};

export default AsideNav;
