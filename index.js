
var row = 3;
var col = 3;
let turn=0;
var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var imgOrder = ["1","2", "3", "6", "8", "7", "5", "4","9"]
window.onload = function () {
    for (let r = 0; r < row; r++) {

        for (let c = 0; c < col; c++) {

            let tile = document.createElement("img");
            tile.src = `${imgOrder.shift()}.jpg`
            tile.id = `${r}-${c}`

            // Drag functionality 
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile)
        }
    }
}

function dragStart() {
    currTile = this;
    console.log(currTile)
}
function dragOver(e) {
    e.preventDefault();

    // console.log("over")
}
function dragEnter(e) {
    e.preventDefault();


}
function dragLeave() {
    // console.log("leave")
}
function dragDrop() {
    otherTile = this;
    // console.log(otherTile)
}
function dragEnd() {

    if (currTile.src.includes("3.jpg") || otherTile.src.includes("3.jpg")) {

        let currCoords = currTile.id.split("-");
        let r = parseInt(currCoords[0]);
        let c = parseInt(currCoords[1]);

        console.log(currCoords)
        let otherCoords = otherTile.id.split("-");
        let r2 = parseInt(otherCoords[0]);
        let c2 = parseInt(otherCoords[1]);
        console.log(otherCoords)

        let moveLeft = r == r2 && c2 == c - 1;
        let moveRight = r == r2 && c2 == c + 1;

        let moveUp = c == c2 && r2 == r - 1;
        let moveDown = c == c2 && r2 == r + 1;

        let isAdjacent = moveLeft || moveRight || moveDown || moveUp

        if (isAdjacent) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;

            currTile.src = otherImg;
            otherTile.src = currImg
        }
        document.querySelector("#turns").innerHTML = ++turn;
    }
}