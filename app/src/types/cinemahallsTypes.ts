// Define Movie type
export interface Movie {
    id: number;
    title: string;
    image: string;
  }
  
  // Define CinemaHall type
  export interface CinemaHall {
    id: number;
    name: string;
    location: string;
    zipcode: string;
    directionsLink: string | null; // Match TheaterCard prop type
    images: string[];
    movies: Movie[];
  }
  