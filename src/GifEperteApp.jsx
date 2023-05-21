import { useState } from "react";
import { AddCategory  } from "./componets";
import GifGrid from "./componets/GifGrid";

export const GifEperteApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory =(newCategory)=>{
    if ( categories.includes(newCategory) ) return;
    
     setCategories([newCategory,...categories])
    //setCategories(cat=>[...cat,'valorant'])
  }

  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>

      {/* imput */}
      <AddCategory 
      // setCategories={setCategories} 
        onAddCategory = {onAddCategory}
      />
      {/* listado de gif */}
      <button onClick={onAddCategory}>Agregar</button>
      
     
        {categories.map((category) => {
          return <GifGrid key={category}
                  category={category}
          />;
        })}
      
      {/* gif iten */}
    </>
  );
};
