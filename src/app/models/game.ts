export class Game {
    public cards: { id: number, name: string, img: string, number: number }[] = [];

    constructor() {

    }

    createCards() {
        for (let index = 1; index <= 13; index++) {
            this.createSingleCardPerColor(index);
        }

    }

    createSingleCardPerColor(index: number) {
        let name = this.getName(index);
        this.cards.push({"id": (index - 1) * 4 + 0, "name": name, "img": "/assets/img/cards/clubs_"+ index +".png", "number": index});
        this.cards.push({"id": (index - 1) * 4 + 1, "name": name, "img": "/assets/img/cards/diamonds_"+ index +".png", "number": index});
        this.cards.push({"id": (index - 1) * 4 + 2, "name": name, "img": "/assets/img/cards/hearts_"+ index +".png", "number": index});
        this.cards.push({"id": (index - 1) * 4 + 3, "name": name, "img": "/assets/img/cards/spade_"+ index +".png", "number": index});
    }

    getName(index: number) {
        switch (true) {
            case index == 1:
                return 'Ace';
            case index >= 2 && index <= 10:
                return `${index}`;
            case index == 11:
                return 'Jack';
            case index == 12:
                return 'Queen';
            case index == 13:
                return 'King';
            default:
                return 'NoName';
        }
    }
}