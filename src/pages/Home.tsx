import { useState } from "react";
import { Card } from "../components/Card";
import { Movie } from "../interfaces";

interface Props {
  movies: Movie[];
  search: boolean;
}

const Home = (props: Props) => {
  const [searchKeys, setSearchKeys] = useState("");

  return (
    <>
      {props.search && (
        <input
          onChange={(e) => setSearchKeys(e.target.value)}
          type="text"
          className="ml-28 mt-3 bg-white border 
         border-gray-800 text-white text-sm rounded-lg focus:ring-gray-800
          focus:border-gray-800 block w-10/12 p-2.5 outline-none"
          placeholder="Movies, Shows and more"
          required
        />
      )}
      <h1 className="mt-5 text-slate-300 pl-28 font-bold text-2xl">
        Latest Releases
      </h1>
      <div className="grid grid-cols-6 pl-24 pt-7">
        {props?.movies
          ?.filter(
            (data) =>
              data?.title?.includes(searchKeys) ||
              data?.name?.includes(searchKeys)
          )
          .map((data) => {
            return (
              <div key={data.id}>
                <Card  data={data} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
