var view = {
    displayMessage: function(msg){
        var elementMessageArea = document.getElementById("messageArea");
        elementMessageArea.innerHTML = msg;
    },
    displayHit: function(location){
        var elementTable = document.getElementById(location);
        elementTable.setAttribute("class", "hit");
    },
    displayMiss: function(location){
        var elementTable = document.getElementById(location);
        elementTable.setAttribute("class", "miss");
    }
}

//view.displayHit("00");
//view.displayMessage("Found Goomba!");
//view.displayHit("34");
//view.displayMiss("55");
//view.displayHit("12");
//view.displayMiss("25");
//view.displayHit("26");

var model ={
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{ locations: ["31", "41", "51"], hits: ["", "", ""] },
            { locations: ["14", "24", "34"], hits: ["", "", ""] },
            { locations: ["00", "01", "02"], hits: ["", "", ""] }
           ], 
    fire: function(guess){
        for(i=0; i < this.numShips; i++){
            var ship = this.ships[i];
//            for(a=0; a < locations.length; a++){
//            if(locations[a] == guess){
//                console.log(`Trafienie`);
//            } else {
//                continue;
//            }
//            }
            var indexOfLocations = ship.locations.indexOf(guess);
            if(indexOfLocations >= 0){
                ship.hits[indexOfLocations] = "hit";
                view.displayHit(guess);
                view.displayMessage(`You catched Goomba!`);
                if(this.isSunk(ship)){
                    view.displayMessage(`You've got Goomba's Tower! Lugi!`);
                    this.shipsSunk = this.shipsSunk + 1;
                }
                return true;
            }
            }
        view.displayMiss(guess);
        view.displayMessage(`Oh Luigi...it's still Mario...`);
        return false;
        },
    isSunk: function(ship){
            if(ship.hits[0] === "hit" && ship.hits[1] === "hit" && ship.hits[2] === "hit"){
                return true;
            } else {
                return false;
            }
    }
    }


var controller = {
    
    guesses: 0,
    parseGuess: function(guess){
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        
        if(guess === null || guess.length !== 2){
            alert(`Please, provide correct number`);
        } else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);
            
            if(isNaN(row) || isNaN(column)){
                alert(`Opsie! That's not a number!`);
            } else if (row<0 || row>=model.boardSize || column<0 || column>=model.boardSize) {
                alert(`Hey! Your number is out of border!`);
            } else {
                return row + column;
            }
        }
        return null;
    },
    processGuess: function(guess){
        var location = this.parseGuess(guess);
        if (location){
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips){
                view.displayMessage("You've found all Goombas. You needed only " + this.guesses + " Luigies!"); 
                var koniec = document.getElementById("firebutton");
                koniec.setAttribute("type", "text");
                koniec.setAttribute("value", "End of a game!");
                }
        }
    }
    
}


    function init(){
        var fireButton = document.getElementById("firebutton");
        fireButton.onclick = getValue;
        var guessInput = document.getElementById("guessInput");
        guessInput.onkeypress = handleKeyPress;
    }
    
    function getValue(){
        var guessInput = document.getElementById("guessInput");
        var guess = guessInput.value;
        controller.processGuess(guess);
        
        guessInput.value = "";
    }
    
    function handleKeyPress(e){
        var fireButton = document.getElementById("firebutton");
        if (e.keyCode === 13){
        firebutton.click();
        return false;
        }

}
    window.onload = init;
//console.log(controller.processGuess("A1"));
//console.log(controller.processGuess("A0"));
//console.log(controller.processGuess("A2"));
//console.log(controller.processGuess("C4"));
//console.log(controller.processGuess("D4"));
//console.log(controller.processGuess("B4"));
//console.log(controller.processGuess("D1"));
//console.log(controller.processGuess("E1"));
//console.log(controller.processGuess("F1"));