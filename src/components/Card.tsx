import { useState } from "react";
import { Movie } from "../interfaces";
import { Link } from "react-router-dom";
import HeartFilled from "./icons/heart-filled";

// import  {useLocalStorage}  from "../storage/storage";

interface Props {
  data: Movie;
}

export const Card = ({ data }: Props) => {
  const image = "https://image.tmdb.org/t/p/w500";

  // let value : string
  // const [value,setValue] = useState<Array<Movie>>([])
  const [color, setColor] = useState(true);

  // const deleteFav = () =>{
  //   const newFav = [...value];
  //   const favIndex = newFav.findIndex(
  //     (fav) => fav.text === data.id
  //   );
  //   newFav.splice(favIndex, 1);
  //   setValue(newFav);
  // };
  
  const handleClick = () => {
    setColor(!color);
    const fav = JSON.stringify(data);
    if (color == true) {
      
      const newFav = [];
      newFav.push(fav)
      // const favs = newFav
      // .map(( favIndex, arr) =>{

      // } )
      console.log(newFav);
      localStorage.setItem("fav", JSON.stringify(newFav));
    } else {
      // const getItem = localStorage.getItem("fav");
      // const parsed = JSON.parse(getItem)
      // console.log(setValue(parsed))
      
      localStorage.removeItem("fav");
    }
  };

  
  return (
    <div>
      <Link key={data.id} to="/details" state={{ data: data }}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 text-white">
          <img
            src={`${image}${data?.poster_path}`}
            alt={data?.title ?? data?.name}
          />
          <p>{data?.title ?? data?.name}</p>
          <p>{data?.adult}</p>
        </div>
      </Link>
      <div>
        <button key={data.id} onClick={handleClick}>
          <HeartFilled color={color} />
        </button>
      </div>
      <div>

      </div>
    </div>
  );
};
