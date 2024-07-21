let homeArr =['M','A','N','C','A','L','A','M','A','N','C','A','L','A']

function createHomePits(){

       
    let rightSide = document.getElementById("homeRight")
    let leftSide = document.getElementById("homeLeft")
    /*--CREATE SECOND PLAYER'S STORE--*/
    
    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    async function load () { // We need to wrap the loop into an async function for this to work

    for(let i = 0;i <homeArr.length; i++){
            if(i==0||i<7){

              /*--CREATE SECOND PLAYER'S STORE detailed--*/
              let storeElement = document.createElement("div");
              //create a div or button element to store the newly created Store class data 
              storeElement.classList.add(  "col"+0)
              //add classnames to the element signifying store functionality
              
              let storeElementText = document.createTextNode(homeArr[i])
              storeElement.append(storeElementText)
              storeElement.style.transform = 'rotate(90deg)'

              //append the value of store in the array as the text of the element
      
              //storeElement.setAttribute("id", arr[i].id)
              //add a unique id to the element using the pit array
              await timer(450);
                    leftSide.append(storeElement)

            
              //append the Store class div element to the second player's container element
          
            
            }
            else{
                    let pit = document.createElement("div");
                                    let text = document.createTextNode(homeArr[i])
                                    pit.classList.add("col"+i)
                                    pit.appendChild(text)
                                    pit.style.transform = 'rotate(90deg)'
                                    //pit.setAttribute("id", `${i}`)
                                    //create a new html button element using the pit class in the array
                                    await timer(250);

                                    rightSide.append(pit)
                                    //griddy.append(pit)

            }
    }

}

load()

}


createHomePits()