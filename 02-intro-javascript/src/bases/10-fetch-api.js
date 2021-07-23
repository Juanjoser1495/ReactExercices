const apiKey = "MYd3MEMyY4Z5fG1JiX7Rer2gRn8rFU3u";
const url = "http://api.giphy.com/v1/gifs/random?api_key=";

const peticion = fetch(url + apiKey);

// peticion
//   .then((resp) => {
//     console.log(resp);
//     resp.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch(console.warn);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });
