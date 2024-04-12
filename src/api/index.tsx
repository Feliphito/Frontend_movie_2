// // esta funcion llama para optener las pelis/series
// // import { Dispatch, SetStateAction } from "react";
// // import { Movie } from "../interfaces";

// const baseUrl = "https://api.themoviedb.org/3/";
// const apiKey = "api_key=2561a8e73613743a9ef14e312638420f";

// interface Props {
//   menu: string;
//   setMovies: Dispatch<SetStateAction<Movie>>;
// }

// export const getMovies = async ({menu, setMovies}:Props) => {

//       try {
//         await fetch(
//           menu == "home" || menu == ""
//             ? `${baseUrl}movie/upcoming?${apiKey}`
//             : `${baseUrl}discover/${menu ? menu : "movie"}?${apiKey}`
//         )
//           .then((res) => res.json())
//           .then((json) => setMovies(json.results));
//       } catch (err) {
//         console.error(err);
//       }
//     };

// // export function getMovies<T>(menu: string): Promise<T> {
// //   return fetch(
// //     menu == "home" || menu == ""
// //       ? `${baseUrl}movie/upcoming?${apiKey}`
// //       : `${baseUrl}discover/${menu ? menu : "movie"}?${apiKey}`
// //   ).then((response) => {
// //     if (!response.ok) {
// //       throw new Error(response.statusText);
// //     }
// //     return response.json() as Promise<T>;
// //   });
// // }
