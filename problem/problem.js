let myArray = [12,34,45,89];

function displayArr( newArray ){
    console.log (newArray)
}

function displayArrPro(){
  
    for (let i=0;i<=myArray.length;i++)
    
    {
        console.log( (i+1) + " numer is " + myArray[i])
    }


}


myArray.push (4)
myArray.push (99)
myArray.push (30)
myArray.push (85)
myArray.push (75)
displayArr(myArray)

// myArray.pop (4)
// myArray.pop (99)
// myArray.pop (30)
// myArray.pop (85)
// myArray.pop (75)
// displayArr(myArray)

myArray.splice (2,2) 
displayArr(myArray)

myArray.splice (5,1) 
displayArr(myArray)


// myArray.splice (0)
// displayArr(myArray)

// let length = myArray.length 
// displayArr(myArray)

myArray.splice (0, myArray.length)
displayArr(myArray)


myArray=[5,7,90,78]
displayArr(myArray)
myArray.splice(2,0,8)
myArray.splice(3,0,45)
displayArr(myArray)

myArray.splice(3,2,10)
displayArr(myArray)

myArray.splice(2,1,69)
displayArr(myArray)

myArray[2]=96
displayArr(myArray)


displayArr(myArray[3])



displayArrPro(myArray)
