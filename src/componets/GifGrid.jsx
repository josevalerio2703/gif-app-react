import { useEffect, useState } from "react";
import GifCard from "./GifCard";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  //***********We can create a custom hook to reduce code**********/

  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImgs = await getGifs(category);
  //   setImages(newImgs);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  //*************************************************************** */

  return (
    <>
      <h3>{category}</h3>
      {
      isLoading && ( <h2>Loading......</h2> )
      }
      <div className="card-grid ">
        {images.map((ele) => (
          <GifCard key={ele.id} {...ele} /> //We can use the spread operator, so we can use all the props
        ))}
      </div>
    </>
  );
};

export default GifGrid;
