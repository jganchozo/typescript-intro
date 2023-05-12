
const skills: string[] = ['Bash', 'Counter', 'Healing'];

const strider: ICharacter = {
    name: 'Strider',
    hp: 100,
    skills,
}

interface ICharacter {
    name: string;
    hp: number;
    skills: string[],
    hometown?: string
}

strider.hometown = 'Rivendell';

console.table({ strider });

export { };