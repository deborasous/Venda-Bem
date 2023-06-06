import React from "react";

//import sass
import "./LargeButton.sass";

const ButtonForm = (props) => {
  return (
    <>
      <button className="btnForm">{props.name}</button>
    </>
  );
};

export default ButtonForm;
