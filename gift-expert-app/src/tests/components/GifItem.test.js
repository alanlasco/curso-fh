import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components";
import React from "react";
describe("pruebas en GifItem", () => {
  const title = "saitama";
  const url = "https://one-punch.com/saitama.jpg";
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("debe mostrar imagen con el url y alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole("img").src).toBe(url);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("debe mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
