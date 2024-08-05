import React from "react";
import PropTypes from "prop-types";
import Dog from "./assets/dog.jpg";

function ProfilePicture(props) {
  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={Dog} alt="dog" />;
}

ProfilePicture.propTypes = {};

export default ProfilePicture;
