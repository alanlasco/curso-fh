const say = () => {
  return "Hola ALan";
};

export const FirstApp = ({ name, surname }) => {
  //   const newMessage = {
  //     message: "alan",
  //     title: "lasco",
  //   };
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
