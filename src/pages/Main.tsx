import Home from "./Home";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import { useEffect, useState } from "react";
import { Movie } from "../interfaces";

const Main = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [menu, setMenu] = useState<string>("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const baseUrl = "https://api.themoviedb.org/3/";
  const apiKey = "api_key=2561a8e73613743a9ef14e312638420f";

  const getMovies = async (page: number) => {
    setLoading(true);
    try {
      await fetch(
        menu == "home" || menu == ""
          ? `${baseUrl}movie/upcoming?&page=${page}&${apiKey}`
          : `${baseUrl}discover/${
              menu ? menu : "movie"
            }?&page=${page}&${apiKey}`
      )
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
      setLoading(false);
      setPage(page + 1);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovies(page);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.scrollHeight
    ) {
      getMovies(page);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  // ciclo de vida del menu/Navbar/Home
  useEffect(() => {
    getMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  return (
    <div className="bg-black min-h-screen">
      <div className="flex  h-full w-full">
        <div className="w-1/12">
          {/*
          Barra de navegacion se le pasa las props del useState del menu y el buscador
           */}
          <Navbar setMenu={setMenu} setSearch={setSearch} search={search} />
        </div>
        {!search && (
          <div className="w-11/12">
            {/*
          Es la peli/serie de bienvenida se le pasan las props de movies para cargarlas 
          */}
            <Welcome movies={movies.at(0)} />
          </div>
        )}
      </div>
      <Home search={search} movies={movies} />
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Main;
