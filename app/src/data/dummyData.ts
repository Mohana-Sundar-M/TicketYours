export interface Movie {
  id: number;
  title: string;
  poster: string;
}

export interface Theater {
  id: number;
  name: string;
  address: string;
  distance: string;
  image: string;
  movies: Movie[];
}

export const dummyData: Theater[] = [
  {
    id: 1,
    name: "PVR Heritage RSL ECR Chennai",
    address: "Heritage RSL ECR, 1st Floor, Near Uthandi Toll gate, ECR, Survey No:3/488B1A & 3/700 No.17. Uthandi Village, Sholinganallur Taluk, East Coast Road, Chennai 60",
    distance: "13.1 km away",
    image: "theater1.jpg",
    movies: [
      { id: 1, title: "Teenz", poster: "teenz.jpg" },
      { id: 2, title: "Spy Family", poster: "spyfamily.jpg" },
    ],
  },
  {
    id: 2,
    name: "INOX The Marina Mall, OMR, Chennai",
    address: "PVR INOX Limited, 3rd Floor, The Marina Mall, Old Mahabalipuram Road, Egattur, Chennai - 603103, Tamil Nadu",
    distance: "15.2 km away",
    image: "theater2.jpg",
    movies: [
      { id: 1, title: "Top Gun: Maverick", poster: "topgun.jpg" },
      { id: 2, title: "Black Widow", poster: "blackwidow.jpg" },
    ],
  },
];
