var vehicle;
var Bike = prompt("enter the Bike name")

switch (Bike) {
    case "RE":
        vehicle = "RE is good!";
        break;
    case "BMW":
        vehicle = "I am not a fan of BMW.";
        break;
    case "Hero":
        vehicle = "My favourite Bike is Hero";
        break;
    case "Bajaj":
        vehicle = "How you like them Bajaj?";
        break;
    default:
        vehicle = "I have never heard of that Bike...";
}
document.getElementById("one").innerHTML = vehicle