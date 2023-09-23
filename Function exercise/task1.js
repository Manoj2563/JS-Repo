
function Valid(){
var num1 = document.querySelector("#num1").value ;
var num2 = document.querySelector("#num2").value ;
var num3 = document.querySelector("#num3").value ;

if(num1 > num2 && num1 > num3){
    document.getElementById("answer").innerHTML= ("Num1 is Greater")
}
else if (num2 > num3) {
    document.getElementById("answer").innerHTML= ("Num2 is Greater")
}
else{
    document.getElementById("answer").innerHTML= ("Num3 is Greater")
}
}
