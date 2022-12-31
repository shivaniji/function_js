function name_list(num1,num2){
    if (num1 && num2%2==0){
        console.log("dono even hai")
    }
    else{
        console.log("dono even nahi hia" )
    }
}
function add_list(list1,list2){
    for(var i=0;i<6;i++){
        name_list(list1[i],list2[i])

    }
}
add_list([2,6,18,10,3,75],[6,19,24,12,3,87])
