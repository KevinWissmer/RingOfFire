export class Game {
    public cards: { id: number, name: string, img: string, number: number}[] = [];
    public active_card = {};
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
    ];
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
    ];
    public card_action = [
        { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
        { title: 'Two is choose', description: 'You decide who drinks.' },
        { title: 'Three is for me', description: 'Congrats! Drink a shot!' },
        { title: 'Four, on the floor', description: 'Last person to touch the floor drinks.' },
        { title: 'Five, Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one.' },
        { title: 'Six is for the Chicks', description: 'All girls drink.' },
        { title: 'Seven, up to heaven', description: 'Put your hands up! The last player drinks!' },
        { title: 'Eight brings a Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
        { title: 'Nine, it is time to rhyme', description: 'The card drawer says a word, and you go around the circle coming up with words that rhyme with that word. If someone gets stuck, they drink, and the turn is over. ' },
        { title: 'Ten is for Men', description: 'All men drink.' },
        { title: 'Question master', description: 'You are know the question master. The question master can ask a question at any point, and everyone has to avoid answering it. If someone forgets the rule and answers the question, they have to drink.' },
        { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
        { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
    ];
    public info_visibility = false;
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
        this.cards.push({ "id": (index - 1) * 4 + 0, "name": "Club " + name, "img": "/assets/img/cards/clubs_" + index + ".png", "number": index});
        this.cards.push({ "id": (index - 1) * 4 + 1, "name": "Diamond " + name, "img": "/assets/img/cards/diamonds_" + index + ".png", "number": index});
        this.cards.push({ "id": (index - 1) * 4 + 2, "name": "Heart " + name, "img": "/assets/img/cards/hearts_" + index + ".png", "number": index});
        this.cards.push({ "id": (index - 1) * 4 + 3, "name": "Spade " + name, "img": "/assets/img/cards/spade_" + index + ".png", "number": index});
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