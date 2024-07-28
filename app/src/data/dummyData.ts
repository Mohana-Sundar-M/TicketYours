// src/data/theaters.ts
import { Theater } from '../types';

export const theaters: Theater[] = [
  {
    id: 1,
    name: "PVR Heritage RSL ECR Chennai",
    address: "Heritage RSL ECR,1st Floor, Near Uthandi Toll gate, ECR, Survey No:3/488B1A & 3/700 No.17. Uthandi Village, Sholinganallur Taluk, East Coast Road, Chennai 60",
    image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
    distance:15.5,
    movies: [
      { id: 1, title: "Dongles", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 2, title: "Deadpool", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 3, title: "Movie 3", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 4, title: "Movie 4", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      
      
    ],
  },
  {
    id: 2,
    name: "INOX The Marina Mall, OMR, Chennai",
    address: "PVR INOX Limited., 3rd Floor, The Marina Mall, Old Mahabalipuram Road, Egattur, Chennai - 603103, Tamil Nadu",
    image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/232_rOczXQli.jpg",
    distance:16.5,
    movies: [
      { id: 1, title: "Bad Neuz", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 2, title: "Deadpool", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 3, title: "Movie 3", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 4, title: "Movie 4", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 5, title: "Movie 4", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
      { id: 6, title: "Movie 4", image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29644_8EPJjorB.jpg" },
    ],
  },
];
