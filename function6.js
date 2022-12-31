function add_number(num1,num2){
    console.log(num1-num2);
    console.log("________________")
}
function add_number_list(list1,list2){
    b=[]
    for(var i=0;i<3;i++){
        add_number(list1[i],list2[i]);
    }
}
add_number_list([60,10,60],[40,30,60]);