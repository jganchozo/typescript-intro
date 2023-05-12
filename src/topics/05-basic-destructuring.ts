
interface IDetails {
    author: string;
    year: number;
}

interface IAudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: IDetails;
}

const audioPlayer: IAudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

const song = 'New Song';
const { song: oldSong, details: { author }, songDuration: duration } = audioPlayer;

// console.log('Song:', oldSong);
// console.log('Duration:', duration);
// console.log('Author:', author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks = 'Not found'] = dbz;

console.log('Personaje 3:', trunks);


export { };