export interface ResponseApi {
  info: Info;
  results: Movie[];
}

export interface Info {
  count: number | undefined;
  pages: number | undefined;
  next: string | undefined;
  prev: string | undefined;
}

export interface Movie {
  adult: boolean | undefined;
  backdrop_path: string | undefined;
  Budget: number | undefined;
  genres: Genres[] | undefined;
  genres_ids: number[] | undefined;
  homepage: string | undefined;
  id?: number;
  imdb_id: number | undefined;
  original_language: string | undefined;
  original_title: string | undefined;
  overview: string | undefined;
  popularity: number | undefined;
  poster_path: string | undefined;
  production_companies: ProductionCompanies[] | undefined;
  production_contries: ProductionContries[] | undefined;
  release_date: string | undefined;
  revenue: number | undefined;
  runtine: number | undefined;
  spoken_lenguages: SpokenLenguages[] | undefined;
  status: string | undefined;
  tegline: string | undefined;
  title: string | undefined;
  name: string | undefined;
  video: boolean | undefined;
  vote_average: number | undefined;
  vote_count: number | undefined;
  first_air_date: string | undefined;
}

export interface Genres {
  id: number | undefined;
  name: string | undefined;
}

export interface ProductionCompanies {
  id: number | undefined;
  logo_path: string | undefined;
  name: string | undefined;
  origin_country: string | undefined;
}

export interface ProductionContries {
  iso_3666_1: string | undefined;
  name: string | undefined;
}

export interface SpokenLenguages {
  english_name: string | undefined;
  iso_639_1: string | undefined;
  name: string | undefined;
}

export interface ListFav {
  id?: number;
  poster_path: string | undefined;
  title: string | undefined;
  name: string | undefined;
}