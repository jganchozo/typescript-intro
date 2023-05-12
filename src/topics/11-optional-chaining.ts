
export interface IPassenger {
    name: string;
    children?: string[];

}

const passengerOne: IPassenger = {
    name: 'Jose Manuel',
}

const passengerTwo: IPassenger = {
    name: 'Jose Manuel Ganchozo',
    children: ['Heizel', 'Jose Manuel'],
}

const returnChildrenNumber = (passenger: IPassenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;
    
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passengerTwo);
returnChildrenNumber(passengerOne);