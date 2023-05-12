
function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const multiply = (firstNumber: number, secondNumber?: number, base: number = 2) => {
    return firstNumber * base;
}

// const result = addNumbers(1, 2);
// const resultArrow = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(9);
//console.log({ result, resultArrow, multiplyResult });

interface ICharacter {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: ICharacter, amount: number) => {

    character.hp += amount;
}

const strider: ICharacter = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 20);
healCharacter(strider, 20);
strider.showHp();


export { };