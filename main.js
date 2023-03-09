function defaultGrid(col, row) {
    for (let c = 0; c < col; c++) {
        let rootDiv = document.createElement("div");
        
        rootDiv.classList.add("rootDiv", "rootDiv"+c);
        rootDiv.setAttribute("id","rootDiv"+c);
        document.querySelector(".container").append(rootDiv);
        
        let poop = c;
        let interval = 16 * c;
        for (let r = 0; r < row; r++) {
            newRow = document.createElement("div");
            newRow.classList.add("divSquares"); 
            newRow.setAttribute("id",`divSquares${r+interval}`);
            document.querySelector(".rootDiv"+poop).append(newRow);
        }
    }
};

function resetPage() {
    defaultGrid() // pass function into default grid? that gets user input?
}

defaultGrid(16, 16);

for (i = 0; i < (16*16); i++) {
    let divSquares = document.getElementById("divSquares"+i);
    divSquares.addEventListener("mouseover", (e) => {
        divSquares.style.backgroundColor = "blue";
    })
};