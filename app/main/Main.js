const GameManager = require( "../Manager/GameManager").GameManager;
const  Tournament  = require("../Tournament/Tournament").Tournament;

// this could also be a class for the maximum oop fuck
function main(){
let tournament =  new Tournament()
let gameManager = new GameManager(tournament);

gameManager.run();
    
}



main();

