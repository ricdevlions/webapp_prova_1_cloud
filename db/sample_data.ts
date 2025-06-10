const sampleData = [
  {
    email: "alice@example.com",
    name: "Alice",
    releases: {
      create: [
        {
          title: "Dreamscape",
          genre: "Ambient",
          label: true,
          pieces: {
            create: [
              { title: "Intro", genre: "Ambient", duration: 120 },
              { title: "Elevation", genre: "Ambient", duration: 310 },
            ],
          },
        },
        {
          title: "Rhythm City",
          genre: "House",
          label: false,
          pieces: {
            create: [
              { title: "Metro Line", genre: "House", duration: 245 },
              { title: "Bounce", genre: "House", duration: 278 },
            ],
          },
        },
      ],
    },
  },
  {
    email: "bob@example.com",
    name: "Bob",
    releases: {
      create: [
        {
          title: "Night Drive",
          genre: "Synthwave",
          label: true,
          pieces: {
            create: [
              { title: "Neon Road", genre: "Synthwave", duration: 300 },
              { title: "Fog Lights", genre: "Synthwave", duration: 280 },
            ],
          },
        },
        {
          title: "Oceanic",
          genre: "Chill",
          label: false,
          pieces: {
            create: [
              { title: "Calm Shore", genre: "Chill", duration: 260 },
              { title: "Deep Dive", genre: "Chill", duration: 290 },
            ],
          },
        },
      ],
    },
  },
  {
    email: "carla@example.com",
    name: "Carla",
    releases: {
      create: [
        {
          title: "Pulse",
          genre: "Techno",
          label: true,
          pieces: {
            create: [{ title: "Bassline", genre: "Techno", duration: 310 }],
          },
        },
        {
          title: "Whispers",
          genre: "Acoustic",
          label: false,
          pieces: {
            create: [{ title: "Forest Song", genre: "Acoustic", duration: 240 }],
          },
        },
      ],
    },
  },
];

export default sampleData;
