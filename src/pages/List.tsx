
import { useLocation } from "react-router-dom";

export default function List() {
  const image = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  

 

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 text-white">
        <img
          src={`${image}${location?.state?.data?.poster_path}`}
          alt={location?.state?.data?.title ?? location?.state?.data?.name}
        />
        <p>{location?.state?.data?.title ?? location?.state?.data?.name}</p>
        <p>{location?.state?.data?.adult}</p>
      </div>

      <div></div>
    </div>
  );
}
