 /*
 game manager that lets the game run

 note: js is not strictly typed so interfaces do not really make sence, to work with dependency injection?
 */
 
 class GameManager{

    constructor( game){
        this.game = game; 
    }

    run(){
        this.game.play();
        
    }

}


module.exports = {GameManager};