//for getting the movie list and theaterlist
export interface Movie {
    id: number;
    title: string;
    image: string;
  }
  
  export interface Theater {
    id: number;
    name: string;
    address: string;
    image: string;
    distance: number;
    movies: Movie[];
  }
  