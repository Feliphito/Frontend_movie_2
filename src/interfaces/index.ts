export interface ResponseApi {
  info: Info;
  results: Movie[];
}

export interface Info {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
}

export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  Budget?: number;
  genres?: Genres[];
  genres_ids?: number[] ;
  homepage?: string ;
  id: number;
  imdb_id?: number ;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanies[] ;
  production_contries?: ProductionContries[] ;
  release_date?: string ;
  revenue?: number ;
  runtine?: number ;
  spoken_lenguages?: SpokenLenguages[];
  status?: string ;
  tegline?: string ;
  title?: string ;
  name?: string ;
  video?: boolean ;
  vote_average?: number ;
  vote_count?: number ;
  first_air_date?: string ;
}

export interface Genres {
  id: number;
  name?: string ;
}

export interface ProductionCompanies {
  id: number ;
  logo_path?: string ;
  name?: string ;
  origin_country?: string ;
}

export interface ProductionContries {
  iso_3666_1?: string ;
  name?: string ;
}

export interface SpokenLenguages {
  english_name?: string ;
  iso_639_1?: string ;
  name?: string ;
}

export interface ListFav {
  id: number;
  poster_path?: string;
  title?: string ;
  name?: string ;
}