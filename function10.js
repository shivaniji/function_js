function prime(num1){
    let i=0
    let sum=0
    for(i=1;i<num1;i++){
        if (num%i==0){
            sum+=i
        }
if(sum==num1){
    console.log("prime number")
}
    else{
        console.log("prime number nahi hai")
        }
    }
}
prime(6)