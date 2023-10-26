console.log('🟥 🟦 🟩 🟨');
// ***** PART ONE *****
// (x) click button => add that color block
// (x) click color block => remove that block

// ~~~ BLOCK GENERATION ~~~
function makeRedBlock() {
    console.log('Generated red block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block red-fill" onclick="deleteRedBlock(event)"></div>';
// ????? there must be a more streamlined way to do this... ?????
    let counterElement = document.getElementById("red-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber += 1
    counterElement.textContent = newCounter
}
function makeBlueBlock() {
    console.log('Generated blue block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block blue-fill" onclick="deleteBlueBlock(event)"></div>';
    let counterElement = document.getElementById("blue-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber += 1
    counterElement.textContent = newCounter
}
function makeGreenBlock() {
    console.log('Generated green block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block green-fill" onclick="deleteGreenBlock(event)"></div>';
    let counterElement = document.getElementById("green-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber += 1
    counterElement.textContent = newCounter
}
function makeYellowBlock() {
    console.log('Generated yellow block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block yellow-fill" onclick="deleteYellowBlock(event)"></div>';
    let counterElement = document.getElementById("yellow-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber += 1
    counterElement.textContent = newCounter
}

// ~~~ BLOCK DELETION ~~~
function deleteRedBlock(event) {
    console.log('Deleted red block.', event.target);
    event.target.remove()
    let counterElement = document.getElementById("red-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber -= 1
    counterElement.textContent = newCounter
}
function deleteBlueBlock(event) {
    console.log('Deleted blue block.', event.target);
    event.target.remove()
    let counterElement = document.getElementById("blue-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber -= 1
    counterElement.textContent = newCounter
}
function deleteGreenBlock(event) {
    console.log('Deleted green block.', event.target);
    event.target.remove()
    let counterElement = document.getElementById("green-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber -= 1
    counterElement.textContent = newCounter
}
function deleteYellowBlock(event) {
    console.log('Deleted yellow block.', event.target);
    event.target.remove()
    let counterElement = document.getElementById("yellow-count")
    let counterString = counterElement.innerHTML
    let counterNumber = Number(counterString)
    let newCounter = counterNumber -= 1
    counterElement.textContent = newCounter
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ***** PART TWO *****
// (x) disable block deleting
// (x) uncomment html `<header>` element
// (x) every time block generated, color counter updated

// (x) understand each html element
// Which buttons will you need to attach click event handlers to?
    // all of them
// How will you render blocks of different colors?
    // generating separate divs
// Where will the block counts be rendered?
    // in the innerhtml of the block count spans


// ***** STRETCH GOALS *****
// (x) re-enable color blocks deletions
// (x) when color block deleted, color count updated