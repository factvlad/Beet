// let block = document.getElementById("block")
// let blockResize = document.getElementById("block_resize")
// let newWidth = 0, newHeight = 0, oldWidth = 0, oldHeight = 0;
// oldWidth = block.clientWidth,
//     oldHeight = block.clientHeight;

// function getXY(obj_event) {
//     let res = []
//     if (obj_event) {
//         x = obj_event.pageX;
//         y = obj_event.pageY;
//     }
//     res.push(x, y)
//     return res;
// }

// function resize(obj_event) {
//     newWidth = getXY(obj_event)[0],
//         newHeight = getXY(obj_event)[1];
//     block.style.width = newWidth + "px",
//         block.style.height = newHeight + "px";
// }

// function setNewSize() {
//     document.onmousemove = resize;
//     return false;
// }
// function MouseUp() {
//     document.onmousemove = null;
// }

// blockResize.onmousedown = setNewSize
// blockResize.onmouseup = MouseUp
// block_resize_width

// block_resize_height

let block = document.getElementById("block")
let blockResize = document.getElementById("block_resize")
let blockResizeWidth = document.getElementById("block_resizeWidth");
let blockResizeHeight = document.getElementById("block_resizeHeight");
let newWidth = 0, newHeight = 0,
    oldWidth = block.clientWidth,
    oldHeight = block.clientHeight;


function getXY(obj_event) {
    let res = []
    if (obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
    }
    res.push(x, y)
    return res;
}

function resizeX(obj_event) {
    newWidth = getXY(obj_event)[0];
    block.style.width = newWidth + "px";
}
function resizeY(obj_event) {
    newHeight = getXY(obj_event)[1];
    block.style.height = newHeight + "px";
}
function resizeXY(obj_event) {
    resizeX(obj_event);
    resizeY(obj_event);
}
function setNewSizeX() {
    document.onmousemove = resizeX;
    return false;
}
function setNewSizeY() {
    document.onmousemove = resizeY;
    return false;
}
function setNewSizeXY() {
    document.onmousemove = resizeXY;
    return false;
}
function MouseUp() {
    document.onmousemove = null;
}

blockResizeWidth.onmousedown = setNewSizeX;
blockResizeHeight.onmousedown = setNewSizeY;
blockResize.onmousedown = setNewSizeXY;



document.onmouseup = MouseUp;
// blockResizeHeight.onmouseup = MouseUp;
// blockResizeWidth.onmouseup = MouseUp;
// blockResize.onmouseup = MouseUp;


