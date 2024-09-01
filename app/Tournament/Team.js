/*
this class represents a basic basketball Team as a data class
*/

 class Team{

    constructor({Team, ISOCode, FIBARanking}){
        this.Team = Team;
        this.ISOCode = ISOCode;
        this.FIBARanking = FIBARanking;
        console.log(`${Team}, ${ISOCode}`);
    }

}


module.exports = {Team};