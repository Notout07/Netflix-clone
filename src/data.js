export const movies = [
  {
    id: 1,
    title: 'Neon Pulse',
    description: 'In a city where light hides the shadows, one operative must breach the mainframe to save the last of human consciousness before the dawn protocol activates.',
    year: 2024,
    rating: '9.2 Rating',
    duration: '2h 15m',
    ageRating: 'PG-13',
    genre: ['Action', 'Sci-Fi'],
    heroImage: 'hero_neon_pulse_1775796447861.png',
    posterImage: 'hero_neon_pulse_1775796447861.png', 
    youtubeId: 'dQw4w9WgXcQ', // Using generic popular video for demo (Rick Roll/Trailer placeholder)
    cast: ['Julian Thorne', 'Elena Vance', 'Kaelen Mori', 'Sloan Sterling'],
    director: 'Marcus Vane',
    writer: 'Sarah Chen'
  },
  {
    id: 2,
    title: 'Neon Horizon',
    description: 'In a decaying megalopolis where sunlight is a commodity of the elite, a rogue data-hacker discovers a digital ghost that could dismantle the city\'s power structure. As the Neon Horizon approaches, he must choose between his survival and a revolution that could burn the world down.',
    year: 2024,
    rating: '9.2 Rating',
    duration: '2h 15m',
    ageRating: 'PG-13',
    genre: ['Thriller', 'Sci-Fi'],
    heroImage: 'hero_neon_horizon_1775796568793.png',
    posterImage: 'hero_neon_horizon_1775796568793.png',
    youtubeId: 'jNQXAC9IVRw', // Me at the zoo (another classic) or can use real trailer IDs
    cast: ['Julian Thorne', 'Elena Vance', 'Kaelen Mori', 'Sloan Sterling'],
    director: 'Marcus Vane',
    writer: 'Sarah Chen'
  },
  {
    id: 3,
    title: 'The Last Ascension',
    description: 'In a world where light is the only currency, one survivor must navigate the shadows of a collapsing empire to save what remains of humanity.',
    year: 2023,
    genre: ['Action', 'Adventure'],
    posterImage: 'poster_action_1775796584337.png',
    youtubeId: 'tO01J-M3g0U'
  },
  {
    id: 4,
    title: 'Shadow Protocol',
    description: 'A covert operative uncovers a conspiracy.',
    year: 2023,
    genre: ['Thriller'],
    posterImage: 'poster_scifi_1775796602678.png',
    youtubeId: 'eY52Zsg-KVI'
  },
  {
    id: 5,
    title: 'City of Ghosts',
    description: 'A detective explores supernatural occurrences in the neon-lit streets.',
    year: 2022,
    genre: ['Drama', 'Sci-Fi'],
    posterImage: 'poster_action_1775796584337.png',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'Neural Link',
    description: 'An AI researcher connects their brain to the global network.',
    year: 2023,
    genre: ['Sci-Fi'],
    posterImage: 'poster_scifi_1775796602678.png',
    youtubeId: 'jNQXAC9IVRw'
  },
  {
    id: 7,
    title: 'Glass Desert',
    description: 'Survival in a harsh, post-apocalyptic wasteland where everything is reflected.',
    year: 2021,
    genre: ['Sci-Fi', 'Action'],
    posterImage: 'hero_neon_pulse_1775796447861.png',
    youtubeId: 'tO01J-M3g0U'
  },
  {
    id: 8,
    title: 'Echoes of Eden',
    description: 'A journey back to Earth\'s origins.',
    year: 2024,
    genre: ['Fantasy', 'Adventure'],
    posterImage: 'poster_action_1775796584337.png',
    youtubeId: 'eY52Zsg-KVI'
  }
];

// YouTube IDs using random famous movie trailers:
// dQw4w9WgXcQ - Rickroll
// tO01J-M3g0U - Matrix Trailer
// eY52Zsg-KVI - Inception Trailer
// jNQXAC9IVRw - Me at the zoo

export const categories = [
  { title: 'Trending Now', items: [movies[0], movies[1], movies[2], movies[3], movies[4], movies[5]] },
  { title: 'Continue Watching', items: [movies[3], movies[4], movies[5], movies[6], movies[7]] },
  { title: 'Action Movies', items: [movies[0], movies[2], movies[6], movies[7], movies[1]] },
  { title: 'More Like This', items: [movies[3], movies[4], movies[2], movies[5], movies[6], movies[7]] }
];
