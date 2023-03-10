function resetGrid() {
    // todo: HOW TO RESET???
}

function defaultGrid(newVal) {
    // may need reset at the start of this default grid
    for (let c = 0; c < newVal; c++) {
        let rootDiv = document.createElement("div");
        
        rootDiv.classList.add("rootDiv", "rootDiv"+c);
        rootDiv.setAttribute("id","rootDiv"+c);
        document.querySelector(".container").append(rootDiv);
        
        let poop = c;
        let interval = newVal * c;
        for (let r = 0; r < newVal; r++) {
            newRow = document.createElement("div");
            newRow.classList.add("divSquares"); 
            newRow.setAttribute("id",`divSquares${r+interval}`);
            newRow.setAttribute("style", `width: ${500/newVal}px; height: ${500/newVal}px;`)
            document.querySelector(".rootDiv"+poop).append(newRow);
        } 
    }
};

function removeAllChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }   
};

const theGrid = document.querySelector('.container');

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function() {
    let val = document.getElementById("slider").value;
    screenVal.textContent = val;
    let val2 = parseInt(val);
    removeAllChildren(theGrid);
    defaultGrid(val2);
    // console.log(val2);
    // console.log(typeof val); //returns string
    for (i = 0; i < (val2*val2); i++) {
        let divSquares = document.getElementById("divSquares"+i);
        divSquares.addEventListener("mouseover", (e) => {
            divSquares.style.backgroundColor = "blue";
        })
    };
});

// THIS was supposed to GETS OUR GRID VALUE
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