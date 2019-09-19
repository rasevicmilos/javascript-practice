var Character = function() {
    if (this.constructor === Character) {
        throw new TypeError("Cannot construct Character instances!");
    }
    this._x = Math.floor(Math.random() * 10);
    this._y = Math.floor(Math.random() * 10);
    Character.count++;
}

Character.count = 0;

Character.prototype = {
    set x  (x)  { this._x = x; },
    get x  ()   { return this._x },
    set y  (y)  { this._y = y; },
    get y  ()   { return this._y },
    find() {    
        console.log(this._x, this._y);
    },
    setPosition(x, y) {
        this.x = x,
        this.y = y
    }
};

var PlayerCharacter = function() {
    Character.call(this);
}

PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.prototype.constructor = PlayerCharacter;

var NonPlayerCharacter = function() {
    Character.call(this);
}

NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;

var player = new PlayerCharacter();
var player1 = new PlayerCharacter();
var player2 = new NonPlayerCharacter();
var player3 = new NonPlayerCharacter();

player.find();
player.setPosition(4, 4);
player.find();
console.log(Character.count);