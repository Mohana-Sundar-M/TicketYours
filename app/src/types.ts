export interface Movie {
  id: number;
  title: string;
  language:string;
  genre:string;
  rating:string;
  duration:string;
  image: string;
  timings: {
    [language: string]: string[];
  };
  
}


export interface Theater {
  id: number;
  name: string;
  address: string;
  image: string;
  distance: number;
  images: string[];
  directionsLink:string;
  movies: Movie[];
}