// Variable Declarations
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
const resetBtn = document.querySelector("#reset-btn");
const labelBox = document.querySelector("#label-box");

let currrentDraggedElement = null;

// Function Definitions
function dragStart() {
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("highlight");
}

function dragLeave(e) {
    e.preventDefault();
    this.classList.remove("highlight");
}

function dropped(e) {
    e.preventDefault();
    
    this.classList.remove("highlight");

    // I check if the drop zone has children to prevent the user from stacking multiple labels
    if (this.children.length > 0) {
        return; 
    }

    this.appendChild(currrentDraggedElement);
    currrentDraggedElement = null;
}

function resetPuzzle() {
    // I reparent all labels back to the starting box so the player gets a clean board
    for (let i = 0; i < labels.length; i++) {
        labelBox.appendChild(labels[i]);
    }
}

// Event Listeners
for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("dragstart", dragStart);
}

for (let i = 0; i < targetZones.length; i++) {
    targetZones[i].addEventListener("dragover", dragOver);
    targetZones[i].addEventListener("drop", dropped);
    targetZones[i].addEventListener("dragenter", dragEnter);
    targetZones[i].addEventListener("dragleave", dragLeave);
}

resetBtn.addEventListener("click", resetPuzzle);