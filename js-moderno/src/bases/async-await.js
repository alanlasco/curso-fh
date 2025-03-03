const getImagen = async () => {
  try {
    const api_key = "SFrAQikgmaxtbC2QMYzNXbBtPEwtOYtF";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    ); //una vez que termine puedo pensar que el codigo es sincrono
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getImagen().then(console.log);
