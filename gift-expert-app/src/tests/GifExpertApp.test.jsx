import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp.jsx";

describe("pruebas en GifExpertApp", () => {
  test("debe renderizar el componente sin errores", () => {
    render(<GifExpertApp />);

    // Verificamos que el título se renderice
    expect(screen.getByText("GifExpertApp"));
  });

  test("estado inicial", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("One Punch")).toBeInTheDocument;
  });

  test("agregar categoria cuando se envia el formulario", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Simular entrada de una nueva categoría
    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    fireEvent.submit(form);

    // Verificar que la nueva categoría aparece en el documento
    expect(screen.getByText("Dragon Ball")).toBeInTheDocument;
  });

  test("should first", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Simular entrada de una nueva categoría
    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    fireEvent.submit(form);
    const categories = screen.getAllByText("One Punch");
    expect(categories.length).toBe(1);
  });
});
