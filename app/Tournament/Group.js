const Team = require("./Team").Team;
/**
 * data representation of the different groups inside of the group stage
 */
 class Group{

constructor(group){
    this.GroupName = group;
    this.Teams = new Array();
}



addTeam(teamJsonObject){
    let length = this.Teams.length;
    if(length > 4){
        console.log("[!] there can only be 4 Teams in one Group!");
       
        return;
    }

    let team = new Team(teamJsonObject);

    this.Teams.push(team);
}





}


module.exports = {Group};