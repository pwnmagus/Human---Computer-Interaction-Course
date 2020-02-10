//output
console.log("Welcome to Basic JS")
console.log("============================")
//variable declaration + initialization + selection
if(true){
    var a = 10  //global variable
    let b = 9      //local variable, ga bs diakses sembarangan
    const c = 11   //sejenis ama local variable, const ga bs diubah2 valuenya 
    
    //output variable lokal
    if(true){
        console.log("local variable : "+b)
        console.log("const variable : "+c)
    }
}
//output variable global
console.log("normal variable : "+a)

a = "bunis"
console.log(a)
console.log("============================")

//selection (if else, switch case)
if (true){
    console.log("stmt 1")
}
else{
    console.log("stmt 2")
}
console.log("============================")

let switchVal = 1
switch(switchVal){
    case 1 :
        console.log("case 1 nih")
        break

    case 2 :
        console.log("case 2 nih")
        break
    
    default:
        console.log("just default output")
        break
    
}

//Iteration - Looping
// Do while, while , for
console.log("============================")
for(let i=0; i<10; i++){
    console.log("Looping For [0-9]: "+i)
}
console.log("============================")
let j = 0
while(j<10){
    console.log("While loop [0-9] : "+j)
    j++
}
console.log("============================")
let k=0
do{
    console.log("Do While Loop [0-9] : "+k)
    k++
}while(k<10)

console.log("============================")
//Array & Objects
console.log("Array & Objects")
let arr = []
arr[0] = "Alice"
arr[1] = "Marisa" 
arr[2] = "Patchy"

console.log("Array content at position 1 :  "+arr[1])

//object
let Witch = {
    name : "Marisa",
    nim : "12345",
    age : 20
}

console.log(Witch["name"])
console.log(Witch.name)

//function
function func1(value){
    return value + value
}

console.log(func1(5))

console.log("============================")

//DOM - Document Object Models











