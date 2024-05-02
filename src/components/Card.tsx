import { Movie } from "../interfaces";
import { Link } from "react-router-dom";
import HeartFilled from "./icons/heart-filled";
import { useLocalStorage } from "../storage/storage";
interface Props {
  data: Movie;
}

export const Card = ({ data }: Props) => {
  const image = "https://image.tmdb.org/t/p/w500";

  const { saveItem, removeItem, validate } = useLocalStorage();

  const handleClick = (movie: Movie) => {
    const newMovie = {
      id: movie.id,
      name: movie.name,
      title: movie.title,
      poster_path: movie.poster_path,
    };
    try {
      saveItem(newMovie);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div key={data.id}>
      <Link to="/details" state={{ data: data }}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 text-white">
          <img
            src={`${image}${data?.poster_path}`}
            alt={data?.title ?? data?.name}
          />
          <p>{data?.title ?? data?.name}</p>
        </div>
      </Link>
      <div>
        {!validate(data.id) ? (
          <button
            onClick={() => {
              handleClick(data);
            }}
          >
            <HeartFilled color={true} />
          </button>
        ) : (
          <button
            onClick={() => {
               removeItem(data.id);
            }}
          >
            <HeartFilled color={false} />
          </button>
        )}
      </div>
    </div>
  );
};
