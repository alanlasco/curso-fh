import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";
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
    //screen representa el componente renderizado
  });
  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={n} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });
  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={n} />);
    fireEvent.click(screen.getByText("-1"));
    //screen.debug
    expect(screen.getByText("99")).toBeTruthy();

    //no se evalua el use state, ya lo prueba la gente de react, solo lo que hacemos nosotros
  });
  test("debe de resetear al presionar reset", () => {
    render(<CounterApp value={n} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    fireEvent.click(screen.getByText("RESET"));
    // expect(screen.getByText("n")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    //tambien puede ser por id
    expect(screen.getByText({ n })).toBeTruthy();
  });
});
