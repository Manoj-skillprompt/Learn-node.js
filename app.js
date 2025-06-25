
const sayHello = require("./module");
const multimodule = require("./multimodule");
const fun3 = require("./multimodule");

sayHello("Manoj")
sayHello('Manoj Kumar Chaudhary')

multimodule.fun1("Ram")
multimodule.fun2("Ram")
multimodule.fun3("Ram")


// make a new directory called ./myFolder
const fs= require('fs')
fs.mkdir('./myFolder',(err)=>{
    if(err){
        console.log('error')

    }else{
        console.log('directory created successfully')
    }

})

// create and write to a file asynchronousely
// the problem is when you run the same code multiple times, it erase previous data that is already present and write the data to it
fs.writeFile('./myFolder/newFile.txt','This is the example of creating new file and write data to it',(err)=>{
    if(err){
        console.log(err)
        return
    }else{
        console.log('File created successfully')
    }
})


// the solution is just add third parameter {flag:'a'}, this will append new data

fs.writeFile('./myFolder/newnewFile.txt','Successfully done',{flag:'a'},(err)=>{
    if(err){
        console.log(err)
        return;
    }else{
        console.log('successfully done')
    }
})