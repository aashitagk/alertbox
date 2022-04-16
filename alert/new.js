var path = require("path");

var filename = path.basename('C:/Users/shwet/OneDrive/Documents/Camp K12/alert/new.js');
console.log(filename);

var dirname = path.dirname('C:/Users/shwet/OneDrive/Documents/Camp K12/alert');
console.log(dirname);

var extension = path.extname('C:/Users/shwet/OneDrive/Documents/Camp K12/alert/new.js');
console.log(extension);

var x = path.join('C:/Users/shwet/OneDrive/Documents/Camp K12/alert', 'new.js');
console.log(x);

var fs = require("fs");

fs.readFile('hi.txt' , 'utf8', (err,data)=>{
    console.log(data);
});

fs.writeFile('hi.txt' , "How are you?", (err)=>{
    console.log("data added successfully");
});

fs.appendFile('hi.txt' , "um", (err)=>{
    console.log("data appended succesfully");
});