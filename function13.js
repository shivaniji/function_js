// function even_list(num1){
//     var sum=0
//     for(var i=0;i<num1;i++){
    
//         if(num1%2===0){
//             sum+=i
//             console.log("even",num1)
//         }
//         if(i%2!==0){
//             sum+=i
//             console.log("odd",num1)
//         }

//     }
// }
// even_list([2,54,3,4,65,9])

// function multiplesOfNumbers(limit){
//     var sum=0
//     for(i=0;i<=limit;i++){
//         if(i%3 ===0){
//             sum+=i;
//         }
//         if(i%5 ==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
//  }
//  multiplesOfNumbers(10);



function add_list(num1){
    var sum=0
    for(var i=0;i<=num1;i++){
        if(i%2===0){
            sum+=i;
        }
        if(i%5==0){
            sum+=i;

        }
        console.log(sum);
    }
}
add_list(10)