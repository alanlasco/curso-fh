import { FirstApp } from "../src/FirstApp";
import React from "react"; // Agrega esta línea
import { render } from "@testing-library/react";

describe("Pruebas en <FirstApp />", () => {
  // test("debe hacer match con el snapshot", () => {
  //   const t = "hola soy goku";
  //   const { container } = render(<FirstApp title={t} />);
  //   expect(container).toMatchSnapshot();

  // se asegura que al dia de mañana no vaya a cambiar, evalua todo

  test("debe mostrar el titulo en h1", () => {
    const title = "Hola soy vegeta";

    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    // expect(getByTestId("test-id").innerHTML).toBe(title);
    expect(getByTestId("test-id").innerHTML).toContain(title);
  });
  test("debe mostrar el subtitulo", () => {
    const title = "Hola soy vegeta";
    const subTitle = "soy subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    // expect(getByText(subTitle)).toBeTruthy(); //da uno y da error si hay mas
    expect(getAllByText(subTitle).length).toBeTruthy();
  });
});
