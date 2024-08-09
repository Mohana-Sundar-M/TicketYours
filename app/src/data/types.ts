export interface Showtime {
    time: string;
  }
  
  export interface Theater {
    name: string;
    address: string;
    distance: string;
    showtimes: string[];
  }
  
  export interface Movie {
    id: number;
    title: string;
    duration: string;
    releaseDate: string;
    genre: string;
    language: string;
    image: string;
    theaters: Theater[];
    
  }
  