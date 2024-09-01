const { json } = require("stream/consumers");


/*
    deals with file manipulation and all about that

*/

class JsonFileParseAdaper{

    constructor(){

    }


     /*
    uses the OS api and the require function in node js to connect to the file system and read json data out of a file
    directly parses it to a javascript json object
    */
    readJsonFile( filepath){
        const fs  = require("fs");
        let jsonData = JSON.parse(fs.readFileSync(filepath, "utf-8"));

    return jsonData;


}


}








module.exports = {JsonFileParseAdaper};