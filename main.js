function defaultGrid(col, row) {
    for (let c = 0; c < col; c++) {
        let rootDiv = document.createElement("div");
        
        rootDiv.classList.add("rootDiv", "rootDiv"+c); //also add "hover" class?
        document.querySelector(".container").append(rootDiv);
        
        let poop = c;
        for (let r = 0; r < row; r++) {
            newRow = document.createElement("div");
            newRow.classList.add("rowFloat"); 
            document.querySelector(".rootDiv"+poop).append(newRow);
        }
        // todo: stack the rows -- maybe add breaks, or use flex
    }
}

defaultGrid(16, 16);

