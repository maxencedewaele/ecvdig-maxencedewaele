$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
});





$(document).ready(function() {
    animation();
}, 1000);

$('.button').click(function() {
    animation();
});


function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}

function colorCloud() {
    var colorClass = "";
    $('.cloud').each(function(){
        var colorClass = "color-"+Math.floor(Math.floor(Math.random() * 3));
        $(this).addClass(colorClass);
    });

}
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

    colorCloud();
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
