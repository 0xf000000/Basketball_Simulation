const { JsonFileParseAdaper } = require("../Utils/fileParsing");
const { Group } = require("./Group");


let GROUP_PATH = require("../Utils/constants").constants.groupPath;
let jsonFileParseAdaper = require("../Utils/fileParsing").JsonFileParseAdaper;


// this class represents the Tournament basically
 class Tournament extends jsonFileParseAdaper {

    constructor(){
        super();
        this.Groups = new Array();
        this.init_tournament();
        
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

    play(){
        


        
    }

    



   


}



module.exports = { Tournament};