import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";
import React from "react";
describe("prueba en ADDCategory", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    //disparar evento

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });
  test("si el input tiene un valor debe llamar a onnewcategory", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    // expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  test("no debe llamar a `onNewCategory` si el input está vacío", () => {
    const onNewCategory = jest.fn(); // Creamos un mock para rastrear la función
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    // Aseguramos que el input esté vacío
    fireEvent.input(input, { target: { value: "" } });

    // Simulamos el envío del formulario
    fireEvent.submit(form);

    // Verificamos que la función `onNewCategory` NO fue llamada
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
