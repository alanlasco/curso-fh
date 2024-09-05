const say = () => {
  return "Hola ALan";
};

export const FirstApp = () => {
  //   const newMessage = {
  //     message: "alan",
  //     title: "lasco",
  //   };

  return (
    <>
      {/*fragmento */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <h1>Hola mundo</h1>
      <h2>{say()}</h2>
    </>
  );
};
