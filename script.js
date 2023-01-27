window.onload = function () {

}
function moved(el, event) {

    let startMouseX = event.pageX;
    let startMouseY = event.pageY;

    let coordinateElem = el.getBoundingClientRect();
    let startX = coordinateElem.x + window.pageXOffset;
    let startY = coordinateElem.y + window.pageYOffset;
    console.log("startLeft", coordinateElem);



    document.addEventListener('mousemove', moveHandler, true);
    document.addEventListener('mouseup', upHandler, true);
    event.stopPropagition

    function moveHandler(e) {
        el.style.left = startX + (e.pageX - startMouseX) + 'px';
        el.style.top = startY + (e.pageY - startMouseY) + 'px'
    }
    function upHandler() {
        document.removeEventListener('mousemove', moveHandler, true);
        document.removeEventListener('mouseup', upHandler, true);
    }
}



