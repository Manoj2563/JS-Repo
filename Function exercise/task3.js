
function valid() {
    var num = document.querySelector("#num1").value 
    var start = document.querySelector("#num2").value 
    var end = document.querySelector("#num3").value 

    if(num >= start && num <= end){
      document.write("between the range")
     
    }
    else{
      document.write("outside the range")
        
    }
  }
  