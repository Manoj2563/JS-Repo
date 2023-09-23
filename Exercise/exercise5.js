for(x=1; x<=100; x++)
{
    if(x%3===0 && x%5===0){
        document.write(x," Fizz Buzz <br>")
    }
    else if (x % 5 === 0){
        document.write(x," Buzz ","<br>")
    }
    else if( x % 3 === 0){
        document.write(x," Fizz ","<br>")
    }
    else{
        document.write(x,"<br>")
    }
}