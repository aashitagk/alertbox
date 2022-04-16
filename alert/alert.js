const fs = require("fs");
const path = require("path");
const rl = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout,
});

rl.question(`Enter your text(press enter when done) :`,function(content) {
    rl.question(`Enter the name of the file :`,function(filename) {
        fs.writeFile(
            path.join("C:/Users/shwet/OneDrive/Documents/Camp K12/alert",`/${filename}.txt`),
        content,
        function(err) {
            if(err){
                console.log("There has been an error!");
                return;
            }
            }
            );
    rl.close();
})
});