import { Theater } from './types';

export const theaters: Theater[] = [
  // Your existing dummy data here
  {
    id: 1,
    name: "PVR Heritage RSL ECR Chennai",
    address: "Heritage RSL ECR, 1st Floor, Near Uthandi Toll gate, ECR, Survey No:3/488B1A & 3/700 No.17. Uthandi Village, Sholinganallur Taluk, East Coast Road, Chennai 600119",
    image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
    distance: 15.5,
    images: [
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/417_t4fjT0RD.jpg",
    ],
    directionsLink: "https://maps.google.com/?q=PVR+Heritage+RSL+ECR+Chennai",
    movies: [
      {
        id: 1,
        title: 'Raayan',
        language: 'Tamil, Telugu',
        genre: 'Action',
        rating: 'A',
        duration: '2h 25m',
        image: 'https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29978_GonitFQZ.jpg',
        timings: {
          Tamil: ['11:40 AM', '12:00 PM'],
          Telugu: ['11:40 AM', '12:00 PM', '01:00 PM']
        },
      },
      {
        id: 2,
        title: 'Jailer',
        language: 'Tamil, Telugu',
        genre: 'Thriller',
        rating: 'UA',
        duration: '2h 45m',
        image: 'https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28547_Z3BL5IlB.jpg',
        timings: {
          Tamil: ['10:00 AM', '11:45 AM', '02:30 PM', '03:15 PM'],
          Telugu: ['10:00 AM', '11:45 AM']
        },
      },
      {
        id: 3,
        title: 'Oppenheimer',
        language: 'English',
        genre: 'Biography, Drama, History',
        rating: 'UA',
        duration: '3h 0m',
        image: 'https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29665_mijYx5rc.jpg',
        timings: {
          English: ['09:30 AM', '12:15 PM', '01:00 PM', '03:45 PM'],
        },
      },
    ],
  },
  {
    id: 2,
    name: "INOX The Marina Mall, OMR, Chennai",
    address: "PVR INOX Limited, 3rd Floor, The Marina Mall, Old Mahabalipuram Road, Egattur, Chennai - 603103, Tamil Nadu",
    image: "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/232_rOczXQli.jpg",
    distance: 16.5,
    images: [
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/232_rOczXQli.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/232_rOczXQli.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/232_rOczXQli.jpg",
      "https://originserver-static1-uat.pvrcinemas.com/pvrcms/cinema_v/232_rOczXQli.jpg"
    ],
    directionsLink: "https://maps.google.com/?q=INOX+The+Marina+Mall+OMR+Chennai",
    movies: [
      {
        id: 1,
        title: 'Raayan',
        language: 'Tamil, Telugu',
        genre: 'Action',
        rating: 'A',
        duration: '2h 25m',
        image: 'https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/29978_GonitFQZ.jpg',
        timings: {
          Tamil: ['11:40 AM', '12:00 PM', '01:00 PM', '02:50 PM'],
         
        },
      },
      {
        id: 2,
        title: 'Jailer',
        language: 'Tamil, Telugu',
        genre: 'Thriller',
        rating: 'UA',
        duration: '2h 45m',
        image: 'https://originserver-static1-uat.pvrcinemas.com/pvrcms/movie_v/28547_Z3BL5IlB.jpg',
        timings: {
          Tamil: ['10:00 AM', '11:45 AM'],
          
        },
      },
    ],
  },
];
