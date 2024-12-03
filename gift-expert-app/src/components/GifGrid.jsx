import { useEffect, useState } from "react"; // dispara efectos secundarios, cuando algo cambie quiero disparar un efecto
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        //isLoading && (<h2>cargando....</h2>)
        isLoading ? <h2>cargando....</h2> : null
      }

      <div className="card-grid">
        {images.map(
          (
            image // (i)=>{ i.id i.title}
          ) => (
            <GifItem key={image.id} {...image} /> //para que el gif item reciba cada una de las propiedades como props
          )
        )}
      </div>
    </>
  );
};
