/*
this class represents a basic basketball Team as a data class
*/

 class Team{

    constructor({Team, ISOCode, FIBARanking}){
        this.TeamName = Team;
        this.ISOCode = ISOCode;
        this.FIBARanking = FIBARanking;
        this.points = 0;
    }



    getPoints(){
        return this.points;
    }

    addPoints(points){


        this.points += points;
    }

    getISOCode(){
        return this.ISOCode;
    }



    getName(){
        return this.TeamName;
    }



    getFIBARanking(){
        return this.FIBARanking;
    }

}


module.exports = {Team};