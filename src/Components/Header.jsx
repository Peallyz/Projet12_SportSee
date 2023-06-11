import MainNav from "./Navigation/MainNav";
import PropTypes from "prop-types";

const Header = ({ user = "" }) => {
  return (
    <header>
      <img src="../src/assets/logo.svg" alt="Logo de sportsee" />
      {user ? (
        <>
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
