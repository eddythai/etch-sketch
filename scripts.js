const container = document.querySelector(".container");
const button = document.querySelector("button#size");

createGrid(16)

function changeColor(grid){
    grid.classList.add("hovered")
}

function createGrid(size) {
    let squareSize = Math.floor(400/size)
    console.log(squareSize)
    for (let i = 0; i < size*size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid")
        grid.setAttribute("style",`width: ${squareSize}px; height: ${squareSize}px`)
        container.appendChild(grid);
    }

    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => (grid.addEventListener("mouseover", e => changeColor(e.target) )))
}

function newGrid(){
    const size = window.prompt("Please enter amount of squares");
    container.replaceChildren();
    createGrid(size)

}

button.addEventListener("click",newGrid)
