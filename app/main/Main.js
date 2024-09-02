const GameManager = require( "../Manager/GameManager").GameManager;
const  Tournament  = require("../Tournament/Tournament").Tournament;


function main(){
let tournament =  new Tournament()
let gameManager = new GameManager(tournament);

gameManager.run();
    
}



main();

