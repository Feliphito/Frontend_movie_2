import { useLocalStorage } from "../storage/storage";

export default function Favorites() {
  const image = "https://image.tmdb.org/t/p/w500";
  const { getItems } = useLocalStorage();

  const items = getItems();
  return (
    <div className="bg-black h-screen flex-auto">
      {(items?.length as number) > 0 && items !== undefined ? (
        items?.map((data) => {
          return (
            <div className="bg-black max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2 text-white">
              <img
                src={`${image}${data?.poster_path}`}
                alt={data?.title ?? data?.name}
              />
              <p>{data?.title ?? data?.name}</p>
            </div>
          );
        })
      ) : (
        <div>NO tienes Favoritos</div>
      )}
    </div>
  );
}
