function defaultGrid(col, row) {
    for (let c = 0; c < col; c++) {
        let rootDiv = document.createElement("div");
        
        rootDiv.classList.add("rootDiv", "rootDiv"+c);
        rootDiv.setAttribute("id","rootDiv"+c);
        document.querySelector(".container").append(rootDiv);
        
        let poop = c;
        let interval = col * c;
        for (let r = 0; r < row; r++) {
            newRow = document.createElement("div");
            newRow.classList.add("divSquares"); 
            newRow.setAttribute("id",`divSquares${r+interval}`);
            newRow.setAttribute("style", `width: ${500/row}px; height: ${500/row}px;`)
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

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function() {
    let val = document.getElementById("slider").value;
    screenVal.textContent = val;
});

// THIS GETS OUR GRID VALUE
let newVal = 0;
function sliderValue() {
    slider.addEventListener('input', function() {
        let val = document.getElementById("slider").value;
        // console.log(val);
        // console.log(typeof val);
        newVal = parseInt(val);
        // console.log(newVal);
        // console.log(typeof newVal);
    });
};

sliderValue();

// want the slider to affect the row value
// col in defaultGrid is redundant, remove and replace cols with rows
// maybe I pass into defaultGrid( anon func()) a function the returns the slider value
