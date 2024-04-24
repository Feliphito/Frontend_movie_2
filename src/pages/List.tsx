
// import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../storage/storage";

export default function List() {
  const image = "https://image.tmdb.org/t/p/w500";
  // const location = useLocation();
  const { getItem } = useLocalStorage("fav")
  
  const item = getItem("fav")
  

  return (
    <div className="bg-black h-screen flex-auto">
      <div className="bg-black max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 text-white">
        <img
          src={`${image}${item.patch}`}
          alt={item.title ?? item.name}
        />
        <p>{item.title ?? item.name}</p>
        
      </div>

      <div></div>
    </div>
  );
}
