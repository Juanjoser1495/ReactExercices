const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const apiKey = "MYd3MEMyY4Z5fG1JiX7Rer2gRn8rFU3u";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
