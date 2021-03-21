let prompt = require("prompt-sync")();
let sportMaterial = prompt("Did you get you sport materials?: ");
if (sportMaterial == "No") {
    console.log("first you have to get sportMaterial");
} else {
    console.log("you can go and play soccore: ");
}