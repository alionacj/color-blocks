console.log('🟥 🟦 🟩 🟨');
// ***** PART ONE *****
// (x) click button => add that color block
// (x) click color block => remove that block

// ~~~ BLOCK GENERATION ~~~
function makeRedBlock() {
    console.log('Generated red block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block red-fill" onclick="deleteRedBlock(event)"></div>';
    // add 1 to red count
    
}
function makeBlueBlock() {
    console.log('Generated blue block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block blue-fill" onclick="deleteBlueBlock(event)"></div>';
}
function makeGreenBlock() {
    console.log('Generated green block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block green-fill" onclick="deleteGreenBlock(event)"></div>';
}
function makeYellowBlock() {
    console.log('Generated yellow block.');
    let blockZone = document.getElementById("blocks");
    blockZone.innerHTML += '<div class="block yellow-fill" onclick="deleteYellowBlock(event)"></div>';
}

// ~~~ BLOCK DELETION ~~~
// function deleteRedBlock(event) {
//     console.log('Deleted red block.', event.target);
//     event.target.remove()
// }
// function deleteBlueBlock(event) {
//     console.log('Deleted blue block.', event.target);
//     event.target.remove()
// }
// function deleteGreenBlock(event) {
//     console.log('Deleted green block.', event.target);
//     event.target.remove()
// }
// function deleteYellowBlock(event) {
//     console.log('Deleted yellow block.', event.target);
//     event.target.remove()
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ***** PART TWO *****
// (x) disable block deleting
// (x) uncomment html `<header>` element
// () every time block generated, color counter updated

// (x) understand each html element
// Which buttons will you need to attach click event handlers to?
    // 
// How will you render blocks of different colors?
    // 
// Where will the block counts be rendered?
    // 


// ***** STRETCH GOALS *****
// () re-enable color blocks deletions
// () when color block deleted, color count updated