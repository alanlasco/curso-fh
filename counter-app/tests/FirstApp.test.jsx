import { FirstApp } from "../src/FirstApp";
import React from "react"; // Agrega esta línea
import { render } from "@testing-library/react";

describe("Pruebas en <FirstApp />", () => {
  test("debe hacer match con el snapshot", () => {
    const t = "hola soy goku";
    const { container } = render(<FirstApp title={t} />);
    expect(container).toMatchSnapshot();

    // se asegura que al dia de mañana no vaya a cambiar, evalua todo
  });
  test("debe mostrar el titulo en h1", () => {
    const title = "Hola soy vegeta";

    const { container, getByText } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });
});
