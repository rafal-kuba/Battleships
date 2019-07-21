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
                if(this.isSunk){
                    view.displayMessage(`You've got Goomba's Tower! Lugi!`);
                    this.shipsSunk++;
                }
                return true;
            }
            }
        view.displayMiss(guess);
        view.displayMessage(`Oh Luigi...it's still Mario...`);
        return false;
        },
    isSunk: function(ship){
        for(var i=0; i < this.shipLength; i++){
            if(ship.hits[i] !== "hit"){
                return false;
            }
            return true;
        }
    }
    }

model.fire("14");