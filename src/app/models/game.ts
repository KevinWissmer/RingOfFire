export class Game {
    public cards: { id: number, name: string, img: string, number: number }[] = [];
    public players: { id: number, name: string, img: string }[] = [{"id": 0, "name": "asdasd", "img": "/assets/img/gui_elements/arrow-53-64.png" },{"id": 1, "name": "qweqwe", "img": "/assets/img/gui_elements/arrow-53-64.png" },{"id": 2, "name": "ghjghj", "img": "/assets/img/gui_elements/arrow-53-64.png" }];
    public active_player_index: number = 1;
    public clicked_player_id: number = -1;
    public active_player = { "id": -1, "name": "Add Player", "img": "/assets/img/gui_elements/arrow-53-64.png" };
    public player_img_list = [
        "/assets/img/player_img/bear.png",
        "/assets/img/player_img/cat.png",
        "/assets/img/player_img/chicken.png",
        "/assets/img/player_img/cow.png",
        "/assets/img/player_img/donkey.png",
        "/assets/img/player_img/duck.png",
        "/assets/img/player_img/elephant.png",
        "/assets/img/player_img/fish.png",
        "/assets/img/player_img/giraffe.png",
        "/assets/img/player_img/hamster.png",
        "/assets/img/player_img/kangaroo.png",
        "/assets/img/player_img/lion.png",
        "/assets/img/player_img/owl.png",
        "/assets/img/player_img/pig.png",
        "/assets/img/player_img/scorpion.png",
        "/assets/img/player_img/snail.png",
        "/assets/img/player_img/tortoise.png",
        "/assets/img/player_img/wolf.png"
    ]
    public player_animals = [
        "bear",
        "Cat",
        "chicken",
        "Cow",
        "donkey",
        "duck",
        "elephant",
        "fish",
        "giraffe",
        "hamster",
        "Cow",
        "Cow",
        "Cow",
        "Cow",
        "Cow",
        "Cow"
    ]
    selected_name = 'Choose Name';
    selected_img = 'Choose Animal';

    constructor() {
        this.createCards();

    }

    createCards() {
        for (let index = 1; index <= 13; index++) {
            this.createSingleCardPerColor(index);
        }
        this.cards = shuffle(this.cards);
    }

    createSingleCardPerColor(index: number) {
        let name = this.getCardName(index);
        this.cards.push({ "id": (index - 1) * 4 + 0, "name": "Club " + name, "img": "/assets/img/cards/clubs_" + index + ".png", "number": index });
        this.cards.push({ "id": (index - 1) * 4 + 1, "name": "Diamond " + name, "img": "/assets/img/cards/diamonds_" + index + ".png", "number": index });
        this.cards.push({ "id": (index - 1) * 4 + 2, "name": "Heart " + name, "img": "/assets/img/cards/hearts_" + index + ".png", "number": index });
        this.cards.push({ "id": (index - 1) * 4 + 3, "name": "Spade " + name, "img": "/assets/img/cards/spade_" + index + ".png", "number": index });
    }


    addPlayer(player) {
        this.players.push({ "id": this.getnewPlayerId(), "name": player[0], "img": player[1] })
        if(this.players.length == 1) {
            this.active_player = this.players[0];
            this.active_player_index = 0;
        }
    }

    getnewPlayerId() {
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
        let current_card: { id: number, name: string, img: string, number: number } = { "id": -1, "name": "not found", "img": "", "number": -1 };
        for (let index = 0; index < this.cards.length; index++) {
            if (this.cards[index].id == id) {
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