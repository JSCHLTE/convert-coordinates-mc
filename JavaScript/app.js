const xNum = document.querySelector("#xInput");
const yNum = document.querySelector("#yInput");
const zNum = document.querySelector("#zInput");
const btnConvert = document.querySelector("button");
const btnReset = document.querySelector(".btnReset")

let xCoord = 0;
let yCoord = 0;
let zCoord = 0;

btnConvert.addEventListener("click", () => {

    xCoord = xNum.value / 8;
    yCoord = yNum.value / 1;
    zCoord = zNum.value / 8;

    xRound = Math.floor(xCoord);
    yRound = yNum.value;
    zRound = Math.floor(zCoord);

    netherCoords = (`${xRound}, ${yRound}, ${zRound}`);

    document.getElementById("coords-count").innerHTML = netherCoords;
    document.getElementById("coord-msg").innerHTML = "Go to these coords in the nether and place a portal.";
});

btnReset.addEventListener("click", () => {
    document.getElementById("coords-count").innerHTML = "";
    document.getElementById("coord-msg").innerHTML = "";
    xNum.value = "";
    yNum.value = 64;
    zNum.value = "";
    xNum.focus();
});