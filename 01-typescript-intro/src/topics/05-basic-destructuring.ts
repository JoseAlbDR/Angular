interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const {
  song,
  songDuration: duration,
  details: { author, year },
} = audioPlayer;

console.table({ song, duration, author, year });

const [, , , trunks = 'Not Found']: string[] = [
  'Goku',
  'Vegeta',
  'Gohan',
  'Trunks',
];

console.log('Personaje 3', trunks);

export {};
