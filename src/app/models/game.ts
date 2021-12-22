export class Game {
    public cards: { id: number, name: string, img: string, number: number }[] = [];
    public players: { id: number, name: string, img: string}[] = [];
    

    constructor() {
        this.createCards();
        this.players = [{"id": 0, "name": "Peter", "img": "/assets/img/profile/default_player.png"}, {"id": 2, "name": "Robert", "img": "/assets/img/profile/default_player.png"}]
    }

    createCards() {
        for (let index = 1; index <= 13; index++) {
            this.createSingleCardPerColor(index);
        }
        this.cards = shuffle(this.cards);
    }

    createSingleCardPerColor(index: number) {
        let name = this.getCardName(index);
        this.cards.push({"id": (index - 1) * 4 + 0, "name": "Club " + name, "img": "/assets/img/cards/clubs_"+ index +".png", "number": index});
        this.cards.push({"id": (index - 1) * 4 + 1, "name": "Diamond " + name, "img": "/assets/img/cards/diamonds_"+ index +".png", "number": index});
        this.cards.push({"id": (index - 1) * 4 + 2, "name": "Heart " + name, "img": "/assets/img/cards/hearts_"+ index +".png", "number": index});
        this.cards.push({"id": (index - 1) * 4 + 3, "name": "Spade " + name, "img": "/assets/img/cards/spade_"+ index +".png", "number": index});
    }


    addPlayer(name: string) {
        this.players.push({"id": this.getnewPlayerId(), "name": name, "img": "/assets/img/profile/default_player.png"})
    }

    getnewPlayerId () {
        let id_list: number[] = [];
        this.players.forEach(element => {
            id_list.push(element.id);
        });
        let new_id: number = 0;
        while (id_list.includes(new_id) && new_id <= 1000) {
            new_id += 1;
        }
        return new_id;
    }

    //currently unused
    getCardById(id: number) {
        let current_card: { id: number, name: string, img: string, number: number } = {"id": -1, "name": "not found", "img": "", "number": -1};
        for (let index = 0; index < this.cards.length; index++) {
            if(this.cards[index].id == id) {
                current_card = this.cards[index];
            }
        }
        return current_card;
    }

    getCardName(index: number) {
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

function shuffle(a: { id: number, name: string, img: string, number: number }[]) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}