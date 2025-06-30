import fs from "fs"
import path from "path";
import os from "os"
import { clear } from "console";


// תרגיל 1
// fs.readFile("./file.txt","utf-8",(arr,data) =>{

//     if(arr){
//         console.log(arr);  
//     }
//     console.log(data);
// })

// fs.stat("./file.txt","utf-8",(arr,data) =>{
//     if(arr){
//         console.log(arr);

//     }
//     console.log(`data size : ${data.size}bit. \ncreated at: ${data.birthtime.toLocaleString()}`);
//  })



// תרגיל 2
// fs.readdir("../Filehandling", (err, files) => {
//     if (err) {
//         console.log(err.message)
//     }
//     files.forEach(file => {
//         const fullPath = path.join("../Filehandling", file);

//         fs.stat(fullPath, (err, stats) => {
//             if (stats.isFile()) {
//                 console.log(file);
//             }
//         })
//     })
// });


// תרגיל 3
// function rec(num) {
//     if (num <= 0) {
//         console.log('Times up!');
//         return num
//     }
//     console.log(num);
//     setTimeout(() => {
//         rec(num - 1)
//     }, 1000)
// }
// rec(5);


// תרגיל 4
// fs.readFile("./file1.txt","utf-8",(arr,data)=>{
//     if(arr){
//         console.log('err');
//     }
//     const lines = data.split("\n");
//     const rand = Math.floor(Math.random()* lines.length)
//     console.log(lines[rand]);
// })

// // תרגיל 5
// function peintFreeMem(logs){
// const frememory = os.freemem()
// const allMemory = os.totalmem()
// let persentMem = (frememory / allMemory) * 100

// let count = 0
// const interval = setInterval(()=>{        
//     console.log((persentMem).toFixed(2))
//     count+=1
//     if (count >= logs){
//         clearInterval(interval)
//     }
// },2000)
// }

peintFreeMem(5);


 
    

