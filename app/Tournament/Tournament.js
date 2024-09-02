const { Group } = require("./Group");
const jsonFileParseAdaper = require("../Utils/fileParsing").JsonFileParseAdaper;
const GROUP_PATH = require("../Utils/constants").constants.groupPath;
const TournamentGame = require("./TournamentGame").TournamentGame;


// this class represents the Tournament basically
 class Tournament extends jsonFileParseAdaper {

    constructor(){
        super();
        this.Groups = new Array();
        this.init_tournament();
        
        this.scoreBoard = new Array();
    }


    // parses the tournament Teams and orders them into new Groups
    init_tournament(){
        
        let tournamentGroups = this.readJsonFile(GROUP_PATH);
        
        for (var group in tournamentGroups){
           let tournamentGroup = new Group(group)
           let length = tournamentGroups[group].length;
           
           for(let i = 0; i < length; i++){
               
                tournamentGroup.addTeam( tournamentGroups[group][i]);
               
            }

            this.Groups.push(tournamentGroup);
        }

       
      
    }


    // note: this algorithmic is really slow .. i might need to rewrighte this
    performGroupRound(){

    for( var group in this.Groups){
       
        let teams = this.Groups[group].getTeams();
        console.log(" Group %s", this.Groups[group].getName());
        
        for(let i = 0;  i < 4; i ++){

            for(let j = i + 1 ; j < 4; j++){
              
                let game = new TournamentGame(teams[i], teams[j]);

                game.play();
              
            
                              
              





            }






        }





    }

    }


    showScoreBoard(){

    }



    play(){
        
        this.performGroupRound();







        
    }




   


}



module.exports = { Tournament};