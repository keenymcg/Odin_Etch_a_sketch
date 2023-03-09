function defaultGrid(col, row) {
    for (let c = 0; c < col; c++) {
        let rootDiv = document.createElement("div");
        
        rootDiv.classList.add("rootDiv", "rootDiv"+c);
        rootDiv.setAttribute("id","rootDiv");
        document.querySelector(".container").append(rootDiv);
        
        let poop = c;
        for (let r = 0; r < row; r++) {
            newRow = document.createElement("div");
            newRow.classList.add("divSquares"); 
            newRow.setAttribute("id","divSquares");
            document.querySelector(".rootDiv"+poop).append(newRow);
        }
    }
}

function resetPage() {
    defaultGrid() // pass function into default grid? that gets user input?
}

defaultGrid(16, 16);

let divSquares = document.querySelectorAll(".divSquares");
divSquares.addEventListener("mouseover", changeColor);

function changeColor() {
    let changeTo = document.querySelectorAll(".divSquares");
    changeTo.setAttribute("style", "color:blue");
}