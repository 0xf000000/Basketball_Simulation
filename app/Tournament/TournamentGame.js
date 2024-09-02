
let ProbabilityCalculator = require("../calculations/propebilityCalculator").ProbabilityCalculator;

/**
 * this class represents a basketball game and is basically a dataclass, that also saves a winner
 * note: maby i rename the derived class to end with adapter 
 */
class TournamentGame extends ProbabilityCalculator {
constructor(team1, team2){
    super();
    this.team1 = team1;
    this.team2 = team2;
    this.GamePoints = new Array();
    this.winnerISOCODE;    
}

/**
 * plays a game and saves the result
 */

play(){

    let winner = this.selectWinner(this.team1, this.team2);

    console.log(winner);



}






}





module.exports = {TournamentGame};