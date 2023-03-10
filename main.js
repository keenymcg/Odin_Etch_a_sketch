function defaultGrid(newVal) {
    for (let c = 0; c < newVal; c++) { 
        // creates the parent div for all the divSquare children, and classes/Id, orders & appends
        let rootDiv = document.createElement("div"); 
        rootDiv.classList.add("rootDiv"+c);
        rootDiv.setAttribute("id","rootDiv"+c);
        document.querySelector("#container").append(rootDiv);
        
        let poop = c; // creates a var 
        let interval = newVal * c; // aka userInput * iteration in order to give all divSquares unique IDs
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

function blackSquares(val2) {
    for (i = 0; i < (val2*val2); i++) {
        let divSquares = document.getElementById("divSquares"+i);
        divSquares.addEventListener("mouseover", (e) => {
            divSquares.style.backgroundColor = "black";
        })
    };
};

function randomColor() {
    let color = "";
    for(let i = 0; i < 3; i++) {
        let sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

function randomColorSquares(val2) {
    for (i = 0; i < (val2*val2); i++) {
        let divSquares = document.getElementById("divSquares"+i);
        divSquares.addEventListener("mouseover", (e) => {
            divSquares.style.backgroundColor = randomColor();
        })
    };
}


function resetGrid(val2) {
    const clearGridButton = document.querySelector("#clearGrid");
    clearGridButton.addEventListener('click', function() {
        removeAllChildren(theGrid);
        defaultGrid(val2);
        blackSquares(val2);
    });
};

function checkButtonColor(val2){
    const btnRgb = document.getElementById("btnRGB");
    btnRgb.addEventListener('click', () => {
        randomColorSquares(val2);
    });
    const btnBlack = document.getElementById("btnBlack");
    btnBlack.addEventListener('click', () => {
        blackSquares(val2);
    });
}


function startEtch() {
    defaultGrid(16);
    blackSquares(16);
        // putting button choices here, moving blackSquares inside event listener
    checkButtonColor(16);
    resetGrid(16);
};

startEtch();

const theGrid = document.querySelector('#container');

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function() {
    let val = document.getElementById("slider").value;
    screenVal.textContent = val;
    let val2 = parseInt(val);
    removeAllChildren(theGrid);
    defaultGrid(val2);
    blackSquares(val2);
    checkButtonColor(val2);
    resetGrid(val2);
});

