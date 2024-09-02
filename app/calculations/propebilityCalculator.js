
/**
 * this class manages all the nesecary calculations for our simulated tournament
 */
class ProbabilityCalculator{

    constructor(){

    }


    /**
     * 
     * @param {*} team_A 
     * @param {*} team_B 
     * @param {*} k 
     * 
     * this function calculates the propability of a team to win based on the relative strengths 
     * 
     * 
     * note: uhh i might need to change this and simulate relative points and determine a winner like this.
     */
    calculateWinLoseDrawProperbilitys(team_A, team_B, k = 25){
        let team_A_strength =  1 / team_A.getFIBARanking();
        let team_B_strength = 1 / team_B.getFIBARanking();

        let cum_relative_strength = team_A_strength + team_B_strength;

      


        let diff = Math.abs( team_A_strength - team_B_strength);

        let drawProp = Math.max(0.1, 1 / (1 + diff * k ));
        

        let prop_a_wins = team_A_strength * (1 - drawProp) / cum_relative_strength;
        let prop_b_wins = team_B_strength * (1 - drawProp) / cum_relative_strength;
        
        
        return[

           prop_a_wins,
           prop_b_wins,
            drawProp
        ];
        
    }






    /**
     * selects a random element out of a list. you can change the possibility of selecting one thing with weights
     * @param {*} options 
     * @param {*} weights 
     * @returns 
     */
    randomChoice(options, weights){

        let totalweight = weights.reduce((sum, weight) => sum + weight, 0 );
        
        let randomNumber = Math.random() * totalweight;

        for(let i = 0; i < options.length; i++){
            if(randomNumber < weights[i]){
                return options[i];
            }

                
            randomNumber -= weights[i];
        }

    }




    /**
     * this function does teterm a winner or a draw it will return an string with with the ISO code of the team that won the game. we will simulate the points that got played afterwards.
     * @param {} team1 
     * @param {*} team2 
     */
    selectWinner(team1, team2){
        let options = [ team1.getISOCode(), team2.getISOCode(), "Draw"];
        let props = this.calculateWinLoseDrawProperbilitys(team1, team2);



        let result = this.randomChoice(options, props);






        return result;

    }




}



module.exports = {ProbabilityCalculator};

