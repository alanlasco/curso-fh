import { FirstApp } from "../src/FirstApp";
import React from "react"; // Agrega esta línea
import { render, screen } from "@testing-library/react";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola soy goku";
  const subTitle = "soy un sub";
  test("debe hacer match", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test("debe mostrar hola soy goku", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug
  });

  test("debe mostrar titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de enviar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByAltText(subTitle).length).toBe(2);
  });
});
