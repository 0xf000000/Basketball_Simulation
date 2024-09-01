
/**
 * this class manages all the nesecary calculations for our simulated tournament
 */
class ProbabilityCalculator{

    constructor(){

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




}



module.exports = {ProbabilityCalculator};

