// a={"nidhi":[20,25,30],"abhishek":[95,100,80]}

// function add_list(num){
//     sum=0
//     for(var i=0;i<a["nidhi"].length;i++){
//         sum+=a["nidhi"][i]
//         for(var i=0;i<a["abhishek"].length;i++){
//         // sum+=["abhishek"][i]
//         sum+=a["abhishek"][i]
//         console.log(sum)
//         }
//     }
// }
// add_list()

// function add_list(num,num1){
//     var c=num+num1
// }
// function add_number_list(list1,list2){
//     for(i=1;i<3;i++){
//         add_list(list1,[i],list2,[i])
//     }
// }
a={"nidhi":[20,25,30],"abhishek":[95,100,80]}





// a={"nidhi":[20,25,30],"abhishek":[95,100,80]}

// function even_list(num1){
//     if(num1%2===0){
//         console.log("even",num1)
//     }
//     else{
//         console.log("odd",num1)
//     }
// }
// function add_list(list1){
//     for(var i=0;i<7;i++){
//         even_list(list1[i])
//     }
// }
// add_list([2,3,4,56,7,8,9])









a={"nidhi":[20,25,30],"abhishek":[95,100,80]}
for (i in a){
    sum=0
    x=a["nidhi"]
    y=a["abhishek"]
    i=0
    while (i<x.length){
        sum+=x[i]+y[i]
        console.log(sum,x[i],y[i])
    
    i=i+1
}}