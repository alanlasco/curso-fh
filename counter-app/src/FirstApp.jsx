import PropTypes from "prop-types";
import React from "react"; // Agrega esta línea
const say = () => {
  return "Hola ALan";
};

export const FirstApp = ({ title, subTitle, name }) => {
  //   const newMessage = {
  //     message: "alan",
  //     title: "lasco",
  //   };

  return (
    <>
      {/*fragmento */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1 data-testid="test-id">{title}</h1>
      <p>{subTitle}</p>
      <h2>{say()}</h2>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "pipo",
  subTitle: "no hay subtitulo",
  title: "no hay titulo",
};
