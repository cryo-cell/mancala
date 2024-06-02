//create a pit class that tracks amount and an id
class Pit {
        constructor(count, id){
            this.count = count;
            this.id = id;
        }
}

//create a store class that tracks amount and an id
class Store {
        constructor(count, id){
            this.count = count;
            this.id = id;
        }
}

//create a game array of pits and stores.. we will use this array to create our html elements
let arr = []

function initializeGame(){
//from 0 to 13, if i = 0 or i = 7 push a store to the arr
//else push a pit to the arr

        for(let i=0; i<14; i++){
                if(i==0||i==7){
                        let store = new Store(0, i);
                        //create a new Store class 
                        arr.push(store)
                        //push the store into the array     
                }
                else {
                        let pit = new Pit(4, i);
                        //create a new Pit class 

                        /*set the id equal to i (1,2,3,4,5,6,8,9,10,11,12,13||(not equal to 0 or 7))*/
                        arr.push(pit)
                        //place the pit into the array
                }
        }
        //console.log(arr)
}
initializeGame()
/*function initializeGame(){}*/

function createPits(){
        let rightSide = document.getElementById("right")
        let leftSide = document.getElementById("left")

        //FOR THE LENGTH OF ARR
        //IF ARR[I].ID <7
                //IF ARR[I].COUNT == 0 
                        //APPEND A STORE TO LEFTSIDE
                //IF NOT APPEND A PIT
        //IF ARR[I].ID>7&&ARR[I].ID<14
                //IF ARR[I].ID == 7
                        //APPEND A STORE TO RIGHTSIDE
                //IF NOT APPEND A PIT
        
        for(let i = 0;i <arr.length; i++){
                if(arr[i].id < 7){
                        if(arr[i].count == 0){
                                /*--CREATE SECOND PLAYER'S STORE detailed--*/
                                let storeElement = document.createElement("div");
                                //create a div or button element to store the newly created Store class data 
                                storeElement.classList.add("store", "pit", "col"+0)
                                //add classnames to the element signifying store functionality
                                
                                let storeElementText = document.createTextNode(arr[i].count)
                                storeElement.append(storeElementText)
                                //append the value of store in the array as the text of the element
                        
                                storeElement.setAttribute("id", arr[i].id)
                                //add a unique id to the element using the pit array
                                leftSide.append(storeElement)
                                //append the Store class div element to the second player's container element
                        }
                        else { 
                                 /*--CREATE FIRST PLAYER'S PITS--*/
                                        let pit = document.createElement("div");
                                        let text = document.createTextNode(arr[i].count)
                                        pit.classList.add("pit", "col"+i)
                                        pit.appendChild(text)
                                        pit.setAttribute("id", `${i}`)
                                        //create a new html button element using the pit class in the array

                                        leftSide.append(pit)
                                        //griddy.append(pit)

                                        //append the pit button element to the left side container

                                }
                                //console.log(leftSide)
        //let griddy2 = document.getElementById("container2")        

                }
                if(arr[i].id > 6 && arr[i].id<14){
                        if(arr[i].count == 0){
                                let rightStore = document.createElement("div");
                                rightStore.classList.add("store", "pit", "col"+7)
                                let rightStoreText = document.createTextNode(arr[i].count)
                                rightStore.append(rightStoreText)
                                rightStore.setAttribute("id", arr[i].id)
                        
                                rightSide.append(rightStore)
                        
                        }
                        else {
                                  /*--CREATE SECOND PLAYER'S PITS--*/
                                        let pit = document.createElement("div");
                                        let text = document.createTextNode(arr[i].count)
                                        pit.classList.add("pit", "col"+i)
                                        pit.appendChild(text)
                                        pit.setAttribute("id", `${i}`)

                                        rightSide.append(pit)
                                        //griddy2.append(pit)
      
                        }

                        
                }


        }
}
        /*STORE THE SECOND PLAYER'S HTML CONTAINER*/
        //let leftSide = document.getElementById("left")
        //store the left side container element in variable leftSide

createPits()
 

        /*Next we will:
        create 6 Pit class objects with id's ascending from 1 to 6 and counts of 4, 
        add the classes to the array, 
        create new buttons,
        and append the data to the buttons
        and append the buttons to the second player's side element*/

       /*--CREATE FIRST PLAYER'S STORE 
                for more details see --CREATE SECOND PLAYER'S STORE detailed-- above*/
                //let rightSide = document.getElementById("right")

                //let rightStoreClass = new Store(0, 7);
                //arr.push(rightStoreClass)
        
                
                //griddy2.append(rightStore)

      
     
/*function createPits(){}*/


let pits = document.getElementsByClassName("pit")
let count = 0
let lastMoveAmount = []

function randomFirstPlayer(){
Math.random() < 0.5 ? secondPlayerTurn() : firstPlayerTurn();
//randomize who gets to go first
}
function secondPlayerTurn(){
        for(let i=1;i<7;i++){
                document.getElementById(`${i}`).style.opacity = "0.1";
                 document.getElementById(`${i}`).style.pointerEvents = "none"

                //let aye = document.getElementById(`pit${i}`)
        }
        for(let i=8;i<14;i++){
                document.getElementById(`${i}`).style.opacity = "1";
                document.getElementById(`${i}`).style.pointerEvents = "visible";

                //let aye = document.getElementById(`pit${i}`)
        }
}
function firstPlayerTurn(){
        for(let i=1;i<7;i++){
                document.getElementById(`${i}`).style.opacity = "1";
                document.getElementById(`${i}`).style.pointerEvents = "visible";

                //let aye = document.getElementById(`pit${i}`)
        }
        for(let i=8;i<14;i++){
                document.getElementById(`${i}`).style.opacity = "0.1";
                document.getElementById(`${i}`).style.pointerEvents = "none";

                //let aye = document.getElementById(`pit${i}`)
        }
}

for(let i = 0; i < arr.length; i++){
        //console.log(i)
        //console.log(arr[i])
        //console.log(pits[i])

        if(i>0&&i<7){
                pits[i].addEventListener("click", (e)=>{
                        //console.log(arr[i])
                        //for pits 1 through 6

                        //store the value of the clicked pit in variable count
                        count = parseInt(pits[i].innerHTML)

                        //reset the count of the clicked pit element to 0
                        arr[i].count = 0
                        pits[i].innerHTML = parseInt(0)


                        //count = parseInt(pits[i].innerHTML)
                        // console.log(i+count)
                        //if(i+1!==1 && i+1 !==10){

                        //add one to each pit from i+1 to i + the pit value+1 to skip the clicked value
                        for(let j=i+1; j<i+(count+1); j++){
                                //console.log(j)
                                let counter = j - (j-1)
                        
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
                                else if(j == 14){
                                        count = count +1
                                }
                                else {
                                        let lastPitAmount = pits[j-pits.length].innerHTML
                                        let lastPitClass = pits[j-pits.length].classList.contains("store")
                                        let lastPitId = pits[j-pits.length].id
                                        console.log(aye)
                                        lastMoveAmount.push({lastPitClass, lastPitAmount, lastPitId})
                                        pits[j-pits.length].innerHTML = parseInt(pits[j-pits.length].innerHTML) + parseInt(counter)
                                }

                        }   
                       
                        console.log(lastMoveAmount[lastMoveAmount.length-1])
                        if(lastMoveAmount[lastMoveAmount.length-1].lastPitClass){
                               firstPlayerTurn()
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
                               secondPlayerTurn();
                        }              
                })
                
        }
}

for(let i = 0; i < arr.length; i++){

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
                
                                else if(pits[j-pits.length].id == 14){
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
                                        secondPlayerTurn()
                                        //let aye = document.getElementById(`pit${i}`)
                                }
                        }
                        else if(lastMoveAmount[lastMoveAmount.length-1].lastPitAmount==0&&lastMoveAmount[lastMoveAmount.length-1].lastPitId>8){
                                function stealMove(id){
                                let lastMove = document.getElementById(id)
                                if(lastMove.id=="13"){
                                        let opp = document.getElementById("1")
                                        let store = document.getElementById("0")
                                        let total = parseInt(lastMove.innerHTML)+ parseInt(store.innerHTML)+ parseInt(opp.innerHTML)
                                        store.innerHTML = total;
                                        opp.innerHTML= 0
                                        lastMove.innerHTML= 0
                                        firstPlayerTurn()
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
                                        firstPlayerTurn()

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
                                        firstPlayerTurn()

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
                                        firstPlayerTurn()

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
                                        firstPlayerTurn()

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
                                        firstPlayerTurn()
                                        //add the content of pit1 to the stor
                                        //add the
                                }


                                }
                                stealMove(lastMoveAmount[lastMoveAmount.length-1].lastPitId)
                        } 
                        else {
                                firstPlayerTurn();
                        }              
        
                })
        }

}

function addMarbles(){
for(let i = 0; i<pits.length;i++){
        if(pits[i].innerHTML!==0){
                let count = parseInt(pits[i].innerHTML)
                pits[i].innerHTML = 4


                for(let j = 0; j<count;j++){
                        let marble = document.createElement("div")
                        marble.classList.add("marble")
                        let textMarble = "o"
                        pits[i].append(marble)


                }



        }
        else {
        }
}
}

//const app = document.getElementById("app")
//app.style.display = "none";



//addMarbles()
/* function clickHandlers(){}*/
