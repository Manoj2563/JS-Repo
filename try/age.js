
var r=document.createElement("label")
r=document.createTextNode("Name : ")
var a=document.createElement("input")
a.setAttribute("type","text")
a.setAttribute("name","text1")
a.setAttribute("id","text")
var z=document.createElement("br")
var y=document.createElement("br")
var s=document.createElement("label")
s=document.createTextNode("Age : ")
var b=document.createElement("input")
b.setAttribute("type","number")
b.setAttribute("name","age")
b.setAttribute("id","age")
var x=document.createElement("br")
var w=document.createElement("br")
var c=document.createElement("input")
c.setAttribute("type","button")
c.setAttribute("onclick","Checkage()")
c.setAttribute("value","Click")

document.body.appendChild(r)
document.body.appendChild(a)
document.body.appendChild(z)
document.body.appendChild(y)
document.body.appendChild(s)
document.body.appendChild(b)
document.body.appendChild(x)
document.body.appendChild(w)
document.body.appendChild(c)

function Checkage(){
    if(b.value>18){
        // console.log(b)
        alert("Eligible for vote")
    }
    else{
        alert(" Not Eligible for vote")
    }
}