import fs from "fs"
import readline from "readline-sync"

function craetusers() {

    fs.readFile("./file2.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        let allData = []
        if (data) {
            allData = JSON.parse(data)
        }
        let user = readline.question("enter user")
        let users = { name: user }
        allData.push(users);
        // if (allData.includes(user)){
        //     console.log('the name already exisist');
        //     return
        // }  
        // allData.push(users); 

        fs.writeFile("./file2.txt", JSON.stringify(allData), (err) => {
            if (err) {
                console.log(err);
            }
            console.log('new name craeted');
            
        })
    })
}
//  craetusers()


function readData() {
    fs.readFile("./file2.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(JSON.parse(data))
    })
}
// readData()



function updateDdata() {
    fs.readFile("./file2.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        let alldata = JSON.parse(data)
        let numToChenge = readline.question("enter nemre to cheng")
        let update = readline.question("enter new name")
        let flag = false
        alldata.forEach(element => {
            if (element.name === numToChenge) {
                element.name = update
                flag = true
            }
        });
        if (!flag) {
            console.log('the name not exsist');
        }
        fs.writeFile("./file2.txt", JSON.stringify(alldata), (err => {
            if (err) {
                console.log('erorr');
            }
            console.log("update name")
        })
        )
    })
}
// updateDdata()



function deletData() {
    fs.readFile("./file2.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        let alldata = JSON.parse(data)
        let name = readline.question("enter name to delet")
        let flag = false
        alldata.forEach(element => {
            if (element.name == name) {
                alldata.splice(element, 1)
                flag = true
            }
        })
        if (!flag) {
            console.log("the name not exsist");
        }
        fs.writeFile("./file2.txt", JSON.stringify(alldata), (err => {
            if (err) {
                console.log('erorr');
            }
            // console.log('the name delet');
        })
    )
    })
}
deletData()




