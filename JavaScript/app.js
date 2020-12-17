const xNum = document.querySelector("#xInput");
const yNum = document.querySelector("#yInput");
const zNum = document.querySelector("#zInput");
const btnConvert = document.querySelector("button");

let xCoord = 0;
let yCoord = 0;
let zCoord = 0;

btnConvert.addEventListener("click", () => {

    xCoord = xNum.value / 8;
    yCoord = yNum.value / 8;
    zCoord = zNum.value / 8;

    xRound = Math.round(xCoord);
    yRound = Math.round(yCoord);
    zRound = Math.round(zCoord);

    netherCoords = (`${xRound}, ${yRound}, ${zRound}`);

    document.getElementById("coords-count").innerHTML = netherCoords;
    document.getElementById("coord-msg").innerHTML = "Go to these coords in the nether and place a portal.";
});