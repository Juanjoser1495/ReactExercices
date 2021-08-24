const getImagenPromesa = () =>
  new Promise((resolve) => resolve("https://asfadsf.com"));
getImagenPromesa().then(console.log);

const getImagen = async () => {
  const apiKey = "MYd3MEMyY4Z5fG1JiX7Rer2gRn8rFU3u";
  const url = "http://api.giphy.com/v1/gifs/random?api_key=";

  const resp = await fetch(url + apiKey);
  const data = await resp.json();
  return data;
};

getImagen().then(({ data }) => {
  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
});

export { getImagen };
