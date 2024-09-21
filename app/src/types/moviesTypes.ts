// movieTypes.ts

export interface Cast {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export interface Crew {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export interface Vote {
    id: number;
    value: number; // Assuming 'value' is the vote count
  }
  
  export interface Language {
    id: number;
    language: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    genre: string;
    duration: number; // Duration in minutes
    description: string;
    casts: Cast[];
    crews: Crew[];
    votes: Vote[]; // Votes array for dynamic like percentage
    movielanguage: Language[]; // Languages array
  }
  