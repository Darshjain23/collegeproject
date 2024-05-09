import fs from 'fs'

function logActivity( method, path , user="Unknown") {
    var dateTime =  new Date();
    var logText = "user with id = "+user+" has requested for "+ method+" Method of "+path+" at "+dateTime+"\n";
    fs.appendFile('log.txt',logText,  function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
}

export{logActivity}