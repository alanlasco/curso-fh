import { CounterApp } from "../src/CounterApp";
import { render, screen } from "@testing-library/react";
import React from "react"; // Agrega esta línea
describe("prueba en el <CounterApp/>", () => {
  const n = 100;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={n} />);
    expect(container).toMatchSnapshot();
  });

  test("esperar que 100 se muestre ", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy;
  });
});
