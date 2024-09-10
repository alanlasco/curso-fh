import PropTypes from "prop-types";

const say = () => {
  return "Hola ALan";
};

export const FirstApp = ({ name, surname }) => {
  //   const newMessage = {
  //     message: "alan",
  //     title: "lasco",
  //   };
  if (!name) {
    throw new Error("El nombre no existe");
  }

  console.log(name);
  return (
    <>
      {/*fragmento */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{name + " " + surname}</h1>
      <h2>{say()}</h2>
    </>
  );
};

FirstApp.propTypes = {
  //isrequired para que sea obligatorio
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
};
