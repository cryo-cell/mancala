//create a pit class that tracks amount and and id
class Pit {
        constructor(count, id){
            this.count = 4;
            this.id = id;
    
        }
}
//do the same for Stores
class Store {
        constructor(count, id){
            this.count = 0;
            this.id = id;
    
        }
}

let arr =[]
//create an array to keep track of each created pit's amount

let leftSide = document.getElementById("left")
//store the left side container element variable


let leftStoreClass = new Store();
//create a new Store class 
//leftStoreClass.count = 0;

leftStoreClass.id = 0;
//this will be player number two's Score

arr.push(leftStoreClass)
//place the store into the array and index 0


let leftStore = document.createElement("div");
//create an element to store the newly created Store class data 

leftStore.classList.add("store")
leftStore.classList.add("pit")
//add classnames to the element

let leftStoreText = document.createTextNode(arr[0].count)
leftStore.append(leftStoreText)
//add the value of store in the array as the text of the element

leftStore.setAttribute("id", arr[0].count)
//add a unique id to the element using the pit array
leftSide.append(leftStore)
//append the Store class element to the left side container element

/*Next we will:
create 6 Pit class objects with id's ascending from 1 to 6 and counts of 4, 
add the classes to the array, 
create new buttons,
and append the data to the buttons
and append the buttons to the left side element*/

for(let i=1; i<7; i++){
        //for each loop from 1 to 6
        let p = new Pit();
        //create a new Pit each time
        p.id = i;
        //increase the id
        //p.count = 4;
        //set count to 4
        arr.push(p);
        //add the Pit to the array starting from index 1

        let pit = document.createElement("button");
        let text = document.createTextNode(arr[i].count)
        pit.classList.add("pit")
        pit.appendChild(text)
        pit.setAttribute("id", `${i}`)
        //create a new button element using the pit class in the array

        leftSide.append(pit)
        //append the pit element to the left side container

}

let rightSide = document.getElementById("right")
let rightStoreClass = new Store();
rightStoreClass.count = 0;
rightStoreClass.id = 7;
arr.push(rightStoreClass)
let rightStore = document.createElement("div");
rightStore.classList.add("store")
rightStore.classList.add("pit")
let rightStoreText = document.createTextNode(rightStoreClass.count)
rightStore.append(rightStoreText)
rightStore.setAttribute("id",7)
rightSide.append(rightStore)

for(let i=8; i<14; i++){
        let p = new Pit();
        p.id = i;
        p.count = 4;
        arr.push(p);

        let pit = document.createElement("button");
        let text = document.createTextNode(p.count)
        pit.classList.add("pit")
        pit.appendChild(text)
        pit.setAttribute("id", `${i}`)

        rightSide.append(pit)
}

let pits = document.getElementsByClassName("pit")
let count =0
let lastMoveAmount = []
for(let i=8;i<14;i++){
        document.getElementById(`${i}`).disabled = true;

        //let aye = document.getElementById(`pit${i}`)
}

function secondPlayerTurn(){
        for(let i=8;i<14;i++){
                document.getElementById(`${i}`).disabled = false;
        
                //let aye = document.getElementById(`pit${i}`)
        }
}
for(let i = 0; i < arr.length; i++){
        //console.log(i)
        //console.log(arr[i])
        console.log(pits[i])
        if(i!==0&&i<7){

        pits[i].addEventListener("click", (e)=>{
                //console.log(arr[i])
                //for pits 1 through 9 

                //record the value of the clicked pit
                        count = parseInt(pits[i].innerHTML)

                        //reset the count of the clicked pit to 0
                        arr[i].count = 0
                        pits[i].innerHTML = parseInt(0)
                        //count = parseInt(pits[i].innerHTML)
                       // console.log(i+count)
                        //if(i+1!==1 && i+1 !==10){

                        //add one to each pit from i+1 to i + the pit value+1 to skip the clicked value
                                for(let j=i+1; j<i+(count+1); j++){
                                        //console.log(j)
                                        let  counter = j - (j-1)
                                
                                        if(j<14){
                                                /*if(j==7){
                                                count = count +1 
                                                }
                                                else*/ 
                                                let lastPitAmount = pits[j].innerHTML
                                                let lastPitClass = pits[j].classList.contains("store")
                                                let lastPitId = pits[j].id
                                                //console.log(pits[j])
                                                lastMoveAmount.push({lastPitClass, lastPitAmount, lastPitId})
                                                pits[j].innerHTML = parseInt(pits[j].innerHTML) + parseInt(counter)
                                                //console.log(lastPitAmount)
                                        }
                                        else if(j==14){
                                                count = count +1
                                        }
                                        else {
                                                let lastPitAmount = pits[j-pits.length].innerHTML
                                                let lastPitClass = pits[j-pits.length].classList.contains("store")
                                                let lastPitId = pits[j-pits.length].id
                                                //console.log(aye)
                                                lastMoveAmount.push({lastPitClass, lastPitAmount, lastPitId})
                                                pits[j-pits.length].innerHTML = parseInt(pits[j-pits.length].innerHTML) + parseInt(counter)
                                        }

                                }   
                                console.log(lastMoveAmount[lastMoveAmount.length-1])
                                if(lastMoveAmount[lastMoveAmount.length-1].lastPitClass){
                                        for(let i=8;i<14;i++){
                                                 document.getElementById(`${i}`).disabled = true;
                                                //aye.style.display = "none"
                                        }
                                }
                                else if(lastMoveAmount[lastMoveAmount.length-1].lastPitAmount==0&&lastMoveAmount[lastMoveAmount.length-1].lastPitId<7){
                                        console.log(lastMoveAmount[lastMoveAmount.length-1].lastPitId)  
                                        function stealMove(id){
                                               let lastMove = document.getElementById(id)
                                               if(lastMove.id=="1"){
                                                let opp = document.getElementById("13")
                                                let store = document.getElementById("7")
                                                let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                store.innerHTML = total;
                                                opp.innerHTML= 0
                                                lastMove.innerHTML= 0
                                                secondPlayerTurn()
                                                //add the content of pit1 to the stor
                                                //add the
                                               }
                                               if(lastMove.id=="2"){
                                                let opp = document.getElementById("12")
                                                let store = document.getElementById("7")
                                                let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                store.innerHTML = total;
                                                opp.innerHTML= 0
                                                lastMove.innerHTML= 0
                                                secondPlayerTurn()

                                                //add the content of pit1 to the stor
                                                //add the
                                               }
                                               if(lastMove.id=="3"){
                                                let opp = document.getElementById("11")
                                                let store = document.getElementById("7")
                                                let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                store.innerHTML = total;
                                                opp.innerHTML= 0
                                                lastMove.innerHTML= 0
                                                secondPlayerTurn()

                                                //add the content of pit1 to the stor
                                                //add the
                                               }
                                               if(lastMove.id=="4"){
                                                let opp = document.getElementById("10")
                                                let store = document.getElementById("7")
                                                let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                store.innerHTML = total;
                                                opp.innerHTML= 0
                                                lastMove.innerHTML= 0
                                                secondPlayerTurn()

                                                //add the content of pit1 to the stor
                                                //add the
                                               }
                                               if(lastMove.id=="5"){
                                                let opp = document.getElementById("9")
                                                let store = document.getElementById("7")
                                                let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                store.innerHTML = total;
                                                opp.innerHTML= 0
                                                lastMove.innerHTML= 0
                                                secondPlayerTurn()

                                                //add the content of pit1 to the stor
                                                //add the
                                               }
                                               if(lastMove.id=="6"){
                                                let opp = document.getElementById("8")
                                                let store = document.getElementById("7")
                                                let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                store.innerHTML = total;
                                                opp.innerHTML= 0
                                                lastMove.innerHTML= 0
                                                secondPlayerTurn()

                                                //add the content of pit1 to the stor
                                                //add the
                                               }


                                        }
                                        stealMove(lastMoveAmount[lastMoveAmount.length-1].lastPitId)
                                } 
                                else {
                                        for(let i=1;i<7;i++){
                                                document.getElementById(`${i}`).disabled = true;
        
                                                //let aye = document.getElementById(`pit${i}`)
                                                }
                                                for(let i=8;i<14;i++){
                                                        document.getElementById(`${i}`).disabled = false;
                
                                                        //let aye = document.getElementById(`pit${i}`)
                                                        }
                                }              
                })
        }
                

                //for pits 10 through 16
        
                if(i>7&&i<14){
                        pits[i].addEventListener("click", (e)=>{
                        //record the value of the clicked pit
                                count = parseInt(pits[i].innerHTML)

                                //reset the count of the clicked pit to 0
                                arr[i].count = 0
                                pits[i].innerHTML = parseInt(0)

                                //add one to each pit from i+1 to i + the pit value+1 to skip the clicked value
                                for(let j=i+1; j<i+(count+1); j++){
                                        let  counter = j - (j-1)

                                        if(j<14){
                                                let lastPitAmount = pits[j].innerHTML
                                                let lastPitClass = pits[j].classList.contains("store")
                                                let lastPitId = pits[j].id
                                                //console.log(pits[j])
                                                lastMoveAmount.push({lastPitClass, lastPitAmount, lastPitId})
                                                pits[j].innerHTML = parseInt(pits[j].innerHTML) + parseInt(counter)

                                        }
                        
                                        else if(pits[j-pits.length].id == 7){
                                                count = count + 1
                                        }

                                        else {
                                                let lastPitAmount = pits[j-pits.length].innerHTML
                                                let lastPitClass = pits[j-pits.length].classList.contains("store")
                                                let lastPitId = pits[j-pits.length].id

                                                //console.log(aye)
                                                lastMoveAmount.push({lastPitClass, lastPitAmount, lastPitId})
                                                pits[j-pits.length].innerHTML = parseInt(pits[j-pits.length].innerHTML) + parseInt(counter); 
                                        
                                        }
                                        //add pit values to arr affectedArr 
                                        //the last value of affectedArr
                                        //compare last move of affectedArr to determine if it is a Store (you get to go again)
                                        //compare last move value vs previous value if previous value 0 and last move now is 1
                                        //add the 1 and the value of the adjacent pit to the correct Store 
                                
                                        console.log(lastMoveAmount[lastMoveAmount.length-1])
                                        if(lastMoveAmount[lastMoveAmount.length-1].lastPitClass){
                                                for(let i=1;i<7;i++){
                                                        document.getElementById(`${i}`).disabled = true;
                                                        console.log("stink")
                                                        for(let i=8;i<14;i++){
                                                                document.getElementById(`${i}`).disabled = false;
                        
                                                                //let aye = document.getElementById(`pit${i}`)
                                                                }
                                                           //let aye = document.getElementById(`pit${i}`)
                                                }
                                        }
                                        else if(lastMoveAmount[lastMoveAmount.length-1].lastPitAmount==0&&lastMoveAmount[lastMoveAmount.length-1].lastPitId>7){
                                                function stealMove(id){
                                                let lastMove = document.getElementById(id)
                                                if(lastMove.id=="13"){
                                                        let opp = document.getElementById("1")
                                                        let store = document.getElementById("0")
                                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                        store.innerHTML = total;
                                                        opp.innerHTML= 0
                                                        lastMove.innerHTML= 0

                                                        //add the content of pit1 to the stor
                                                        //add the
                                                }
                                                if(lastMove.id=="12"){
                                                        let opp = document.getElementById("2")
                                                        let store = document.getElementById("0")
                                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                        store.innerHTML = total;
                                                        opp.innerHTML= 0
                                                        lastMove.innerHTML= 0

                                                        //add the content of pit1 to the stor
                                                        //add the
                                                }
                                                if(lastMove.id=="11"){
                                                        let opp = document.getElementById("3")
                                                        let store = document.getElementById("0")
                                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                        store.innerHTML = total;
                                                        opp.innerHTML= 0
                                                        lastMove.innerHTML= 0

                                                        //add the content of pit1 to the stor
                                                        //add the
                                                }
                                                if(lastMove.id=="10"){
                                                        let opp = document.getElementById("4")
                                                        let store = document.getElementById("0")
                                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                        store.innerHTML = total;
                                                        opp.innerHTML= 0
                                                        lastMove.innerHTML= 0

                                                        //add the content of pit1 to the stor
                                                        //add the
                                                }
                                                if(lastMove.id=="9"){
                                                        let opp = document.getElementById("5")
                                                        let store = document.getElementById("0")
                                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                        store.innerHTML = total;
                                                        opp.innerHTML= 0
                                                        lastMove.innerHTML= 0

                                                        //add the content of pit1 to the stor
                                                        //add the
                                                }
                                                if(lastMove.id=="8"){
                                                        let opp = document.getElementById("6")
                                                        let store = document.getElementById("0")
                                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                                        store.innerHTML = total;
                                                        opp.innerHTML= 0
                                                        lastMove.innerHTML= 0

                                                        //add the content of pit1 to the stor
                                                        //add the
                                                }


                                                }
                                                stealMove(lastMoveAmount[lastMoveAmount.length-1].lastPitId)
                                        } 
                                        else {
                                                for(let i=1;i<7;i++){
                                                document.getElementById(`${i}`).disabled = false;

                                                //let aye = document.getElementById(`pit${i}`)
                                                }
                                                for(let i=8;i<14;i++){
                                                        document.getElementById(`${i}`).disabled = true;
                
                                                        //let aye = document.getElementById(`pit${i}`)
                                                        }
                                        }        }       
                        
                        })
                }

}
        