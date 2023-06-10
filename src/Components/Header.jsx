import MainNav from "./Navigation/MainNav";
import PropTypes from "prop-types";

const Header = ({ user = "" }) => {
  return (
    <header>
      {user ? (
        <>
          <img src="../src/assets/logo.svg" alt="Logo de sportsee" />
          <MainNav user={user} />
        </>
      ) : (
        <h1>Home</h1>
      )}
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
