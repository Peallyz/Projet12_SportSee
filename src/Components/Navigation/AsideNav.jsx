import { PropTypes } from "prop-types";
import AsideLink from "./AsideLink";
import iconMeditation from "../../assets/iconMeditation.svg";
import iconSwiming from "../../assets/iconSwiming.svg";
import iconBike from "../../assets/iconBike.svg";
import iconDumbBell from "../../assets/iconDumbBell.svg";

const AsideNav = () => {
  const imgs = [
    { url: iconMeditation, alt: "Meditation" },
    { url: iconSwiming, alt: "Natation" },
    { url: iconBike, alt: "Vélo" },
    { url: iconDumbBell, alt: "Musculation" },
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
      <p>Copiryght, SportSee 2020</p>
    </nav>
  );
};

AsideNav.propTypes = {
  path: PropTypes.string,
};

export default AsideNav;
