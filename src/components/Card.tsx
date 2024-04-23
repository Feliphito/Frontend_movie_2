// import { useState } from "react";
import { Movie } from "../interfaces";
import { Link } from "react-router-dom";
import HeartFilled from "./icons/heart-filled";
import { useLocalStorage } from "../storage/storage";
interface Props {
  data: Movie;
}

export const Card = ({ data }: Props) => {
  const image = "https://image.tmdb.org/t/p/w500";
  const item = false
  const { setItem, getItem, removeItem, validate } = useLocalStorage("fav");
  

  const handleClick = (movie: Movie) => {
    const newMovie = {
      id: movie.id,
      name: movie.name,
      title: movie.title,
      patch: movie.poster_path,
    }

    validate(newMovie.id)
    
    setItem(newMovie)
    
  };

  
  
  return (
    <div  key={data.id}>
      <Link to="/details" state={{ data: data }}>
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
        {
          !item ? (<button onClick={() => {handleClick(data), getItem("fav")}}>
          <HeartFilled color={true} />
        </button>) : (<button onClick={() => {handleClick(data), removeItem()}}>
          <HeartFilled color={false} />
        </button>)
        }
        
      </div>
      <div></div>
    </div>
  );
};
