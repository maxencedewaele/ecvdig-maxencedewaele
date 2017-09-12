function moveLeft(elt) {
    elt.style.left = elt.offsetLeft - elt.clientWidth + "px";
}

function moveRight(elt) {
    elt.style.left = elt.offsetLeft + elt.clientWidth + "px";
}

function moveDown(elt) {
    elt.style.top = elt.offsetTop + elt.clientHeight + "px";
}

function moveUp(elt) {
    elt.style.top = elt.offsetTop - elt.clientHeight + "px";
}

document.getElementById("cat").onmouseover = function(e) {
    var pageLeft = this.offsetLeft;
    var pageTop = this.offsetTop;
    var pageRight = window.innerWidth - this.offsetLeft - this.clientWidth;
    var pageBottom = window.innerHeight - this.offsetTop - this.clientHeight;

    var xCatCursor = e.pageX - pageLeft;
    var yCatCursor = e.pageY - pageTop;

    // Mouse came from top
    if(xCatCursor >= yCatCursor && xCatCursor < this.clientHeight - yCatCursor) {
        // Can go down
        if(pageBottom >= this.clientHeight) {
            moveDown(this);
        }
        else {
            moveUp(this);
        }
    }
    // Mouse came from left
    else if(yCatCursor >= xCatCursor && xCatCursor < this.clientHeight - yCatCursor) {
        // Can go right
        if(pageRight >= this.clientWidth) {
            moveRight(this);
        }
        else {
            moveLeft(this);
        }
    }
    // Mouse came from bottom
    else if(yCatCursor >= xCatCursor && xCatCursor >= this.clientHeight - yCatCursor) {
        // Can go up
        if(pageTop >= this.clientHeight) {
            moveUp(this);
        }
        else {
            moveDown(this);
        }
    }
    // Mouse came from right
    else {
        // Can go left
        if(pageLeft >= this.clientWidth) {
            moveLeft(this);
        }
        else {
            moveRight(this);
        }
    }
}/**
 * Created by maxencedewaele on 12/09/2017.
 */
