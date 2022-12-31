// function name(num){
//     if(num%2==0){
//         console.log("even",num)
//     }
//     else{
//         console.log("odd",num)
//     }
// }
// const input=require("readline-sync")
// var number1=input.questionInt("even number-:")
// var number2=input.questionInt("odd number-:")
// name(number1,number2)


function name(num,num2){
    for (var num;num<=num2;num++){
        if (num%2===0){
            console.log("even",num)
        }
        else{
            console.log("odd",num)
        }
    }
}
const input=require("readline-sync")
var number1=input.questionInt("even number-:")
var number2=input.questionInt("odd number-:")
name(number1,number2)
