#!/usr/bin/env node 
//line meaning: isko kis environment mei run krna hai -- (node mei krna h run)
const fs = require("fs"); //fs - node ka module hai jo file system ko handle krta hai
// pass path if file not in that folder
let data = fs.readFileSync("C:\\Users\\im_at\\wcat\\abc.txt", "utf-8");
console.log(data);
//fs --> read any type of file
//agr utf-8 nhi denge toh buffer format mei aayengi 
// we cannot understand buffer format

// there are a lot of formats


//write in file
fs.writeFileSync("def.txt","i am very good");

//linux
// cat filename ----> show in terminal

//similarly
//wcat filename1 filename2 --> combine

// try in global sometimes global doesnt work, only local work in
// that case

//step 1 npm init 

//(makes package.JSON file) --> will create package.JSON
// aapke system ko kis kis dependencies ki zaroorat hai uske liye ek
// package install ho jaati hai, project se related package.JSON mei sab info store 
//hota hai taaki naye programmer ke lie koi problem na ho
// dependencies apne aap download hogi
// for git --> git init 
// why JSON --> easy to use JSON format, can be easily traversed on web

// npm used for version controlling, to show khud ki commands

                                       //key
//step 2  go to package.JSON -> create "bin": { "wcat" : "script.js"}, 
                                //bin-->object  //command //value
// "wcat is command" kuch bhi likh skte hai--> can be wcatty

// why? to run this file

//khud ki command bnani hai 
// global commands (khi bhi chlne wali command) globally installed in pc
//dalti h bin k andar global commands aati h
// universally accepted nhi hai ki bin mei daalni 
// universal way hai btaane ka (to run a file)


//step 3 -- npm link in terminal
// uthaakr global folder mei copy krdega
// jo info hamne di h

//step 4 -- wcatty in terminal


//package.JSON node modules ki properties btata hai
//package-lock.JSON aapke software ko btata hai

//input kaise lete h
// let filename1 = process.argv[2]; //array 2nd index for input
// let filename2 = process.argv[3];
// let data1 = fs.readFileSync(filename1,"utf-8");
// let data2 = fs.readFileSync(filename2,"utf-8");
// console.log(data1 + "\n" + data2);
//0th index node ka address node.exe
//1st index script.js (aapki file) ka address
//2nd index input milne shuru honge

//To read multiple files
                //like scanner in java








let processData = process.argv; //array 2nd index se input laake deta hai
//console.log(processData);
if(processData[2] == "a"){
    let previousData = fs.readFileSync(processData[3],"utf-8");
    fs.writeFileSync(processData[3], previousData + "\n" +processData[4]);
}
else if(processData[2] == "w"){
    fs.writeFileSync(processData[3],processData[4])
}
else{
    let data = "";
    let iUpdated = false;
    for(let i = 2; i < processData.length; i++)
    {
        if(processData.includes("ne")){
            if(!iUpdated){
                i = i + 1; // dont update jab 3
                iUpdated = true;
            }
            // why? process ke 2nd index pe ne pada hai 
            // and ne is not your file
            let tempData = fs.readFileSync(processData[i], "utf-8");
            //how to check \r
            let lines = tempData.split("\n");
            if(tempData.includes("\r")){
                lines = tempData.split("\r\n");
            }
            let finalData = "";
            for(let j = 0; j < lines.length; j++){
                if(lines[j] != ""){
                    finalData += lines[j] + "\n";
                }
            }
            data += finalData;
            // \r -- regular expressions used in windows
        }
        else if(processData.includes("ns"))
        {
            if(!iUpdated)
            {
                i = i + 1;
                iUpdated = true;
            }
            let tempData = fs.readFileSync(processData[i], "utf-8");
            let arrData = tempData.split(" ");
            let finalData = arrData.join("");
            data += "\n" + finalData;
        }
        else if(processData.includes("num"))
        {
            if(!iUpdated)
            {
                i = i + 1;
                iUpdated = true;
            }
            let temp = fs.readFileSync(processData[i], "utf-8");
            let lines = temp.split("\n");
            let finalAns = "";
            for(let l = 0; l < lines.length; l++)
            {
                finalAns += (l+1) + ". " + lines[l] + "\n";
            }
            data += finalAns;
        }
        else data += "\n" + fs.readFileSync(processData[i],"utf-8");
    }
    //console.log(data);
}

// w write
// r read
// a append
//new line remove ho jaye


//
// const path = require("path");
// console.log(__dirname)





















