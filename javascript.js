let _count = 0;
class Character {
    static count = 0;
    constructor() {
        if (new.target === Character) {
            throw new TypeError("Cannot construct Character instances!");
        }
        this._x = Math.floor(Math.random()*10);
        this._y = Math.floor(Math.random()*10);
        Character.count++;
    }
    static get count() { return _count;}
    setPosition(x, y) {
        if (x > 10 || y > 10) {
            throw new Error("Player out of bounds");
        }
        this.x = x;
        this.y = y;
    }
    set x (x) { this._x = x }
    set y (y) { this._y = y }
    
    find() {
        console.log(this._x,this._y);
    }
}

class PlayerCharacter extends Character {
    constructor() {
        super();
    }
}

class NonPlayerCharacter extends Character {
    constructor() {
        super();
    }
}

var player1 = new PlayerCharacter();
var player2 = new PlayerCharacter();
var nonplayer1 = new NonPlayerCharacter();
var nonplayer2 = new NonPlayerCharacter();

player1.find();
console.log(Character.count);
player1.setPosition(5,9);

player1.find();