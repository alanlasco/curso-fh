import { useEffect } from "react"; // dispara efectos secundarios, cuando algo cambie quiero disparar un efecto
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category); //se sigue disparando dos veces porque react lo hace en el modo estricto
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
