import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

export const Header = ({ currentUser }) => {
  const signOut = () => {
    auth
      .signOut()
      .then(alert("You signed out"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => signOut()}>
            <span className="user-name">{currentUser.displayName} </span> SIGN
            OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // This state means rootReducer
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header); // We connect currentUser data in redux to Header
