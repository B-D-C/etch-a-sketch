window.onload = createSketchBoxGrid(16);
setupEventListeners();


function createSketchBoxGrid(boxCount) {
  var sketchBox = document.getElementById("sketchBox");
  for (let i = 0; i < boxCount*boxCount; i++) {
  let sketchBoxGrid = document.createElement("div");  
  sketchBoxGrid.classList.add("sketchBoxGrid");
  sketchBox.setAttribute("style", `grid-template: repeat(${boxCount}, 1fr) / repeat(${boxCount}, 1fr)`);
  sketchBox.appendChild(sketchBoxGrid);
  }
}

function setupEventListeners() {
  var sketchBox = document.getElementById("sketchBox");
  sketchBox.addEventListener("mouseover", function(event) {
    event.target.classList.add("mouseOverEffectBlack");
  });
}

function reset() {
  var boxCount = prompt("Enter column count, maximum of 100", "16");
  var deleteSketchBoxGrid = document.getElementById("sketchBox");
  deleteSketchBoxGrid.innerHTML = ""; 
  if (boxCount > 100) {
    alert("Column count must 100 or less");
    reset();
  } else 
  createSketchBoxGrid(boxCount);

}




  


