import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
