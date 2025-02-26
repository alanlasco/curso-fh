import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One punch";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true, // Debe ser true porque está en estado de carga
    });

    render(<GifGrid category={category} />);

    // Asegurarse de que el texto de carga realmente existe
    expect(screen.getByText("cargando...."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las imágenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "saitama",
        url: "https://dadadadad",
      },
      {
        id: "abw",
        title: "seaitama",
        url: "https://dadadadad",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs, // Aquí pasamos los gifs de prueba
      isLoading: false, // Ya no está cargando
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
