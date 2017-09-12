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
    var  indexes;
    var colors = ["0","1","2","3","4","5","6","7"];

    $('.cloud').each(function(index, value){
      indexes = Math.floor(Math.random()*colors.length);
      colorClass = "color-" + colors[indexes];
      colors.splice(indexes,1);
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

////Naming elements
//landscape
var wheel = document.getElementsByClassName("wheel");
var cloud = document.getElementsByClassName("cloud");
var tree = document.getElementsByClassName("tree");
var grass = document.getElementsByClassName("grass");

//shepherd
var shepherdhat = document.getElementsByClassName("shepherdHat");
var shepherdarm = document.getElementsByClassName("shepherdArm");
var dogtail = document.getElementsByClassName("dogtail");

//sheep
var sheephead = document.getElementsByClassName("sheepHead");
var sheepears = document.getElementsByClassName("sheepEars");
var sheepleftear = document.getElementsByClassName("sheepLeftEar");
var sheeprightear= document.getElementsByClassName("sheepRightEar");
var sheeprightear2= document.getElementsByClassName("sheepRightEar2");
var sheepleftear2= document.getElementsByClassName("sheepLeftEar2");


//// Animation
//wheel
var tlwheel = new TimelineMax({
    repeat: -1,
});
tlwheel.to(wheel, 18, {
    transformOrigin:"50% 50%",
    rotation: "360deg",
    ease: "linear"
})


//cloud
var tlcloud = new TimelineMax();
tlcloud.staggerFromTo(cloud, 4.5,
    {y:-45,
        ease: "linear"},
    {y:0,
        ease: "linear",
        repeat: -1,
        yoyo: true
    }, 3);


//Grass
var tlgrass = new TimelineMax();
tlgrass.staggerFromTo(grass, 2, {
    transformOrigin:"0% 100%",
    skewX:"10deg"
}, {
    skewX:"-10deg",
    repeat: -1,
    yoyo: true
}, 0.3);


//Tree
var tltree = new TimelineMax();
tltree.staggerFromTo(tree, 2, {
    transformOrigin:"0% 100%",
    skewX:"1.5deg",
}, {
    skewX:"-1.5deg",
    repeat: -1,
    yoyo: true,
}, 1);


//Shepherd
var tlhat = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1.5
});
tlhat.to(shepherdhat, .8, {
        transformOrigin:"75% 0%",
        rotation:"-4deg",
        y:1.3,
        ease: "linear"
    })
    .to(shepherdhat, 1.5, {
        rotation:"0deg",
        y:0
    }, 1)

var tlshepherd = new TimelineMax({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1.5,
});
tlshepherd.to(shepherdarm, .8, {
        transformOrigin:"80% 50%",
        rotation: "-25deg",
        ease: "linear"
    })
    .to(shepherdarm, 1.5, {rotation: "0deg"}, 1)


//Dog Tail
var tldogtail = new TimelineMax({
    repeat: -1,});
tldogtail.to(dogtail, .3, {
        transformOrigin:"0% 50%",
        rotation: "6deg"})
    .to(dogtail, .3, {rotation: "0deg"})


//// Sheep
//Sheep Head
var tlsheephead = new TimelineMax();
tlsheephead.staggerFromTo(sheephead, .7, {y:0}, {
    y: 7,
    ease: "linear",
    repeat: -1,
    yoyo: true,
    repeatDelay: 4
}, 3);


//Sheep Ears
var tlsheepleftear = new TimelineMax({
    repeat: -1,
    repeatDelay: 3.3,
});
tlsheepleftear.to(sheepleftear, .3, {
        transformOrigin:"100% 20%",
        rotation: "50deg",}, 0)
    .to(sheepleftear, .2, {rotation: "0deg",})
    .to(sheepleftear, .1, {rotation: "50deg",})
    .to(sheepleftear, .1, {rotation: "0deg",})
    .to(sheepleftear, .1, {rotation: "50deg",})
    .to(sheepleftear, .1, {rotation: "0deg",})
    .to(sheepleftear, .1, {rotation: "0deg",})
    .to(sheepleftear, .1, {rotation: "50deg",})
    .to(sheepleftear, .1, {rotation: "0deg",})
    .to(sheepleftear, .1, {rotation: "50deg",})
    .to(sheepleftear, .1, {rotation: "0deg",})
    .to(sheepleftear, .1, {rotation: "50deg",}, 1)
    .to(sheepleftear, .1, {rotation: "0deg", })
//right
var tlsheeprightear = new TimelineMax({
    repeat: -1,
    repeatDelay: 3.1,
});
tlsheeprightear.to(sheeprightear, .3, {
        transformOrigin:"0% 20%",
        rotation: "-50deg",}, 0.2)
    .to(sheeprightear, .2, {rotation: "0deg",})
    .to(sheeprightear, .1, {rotation: "-50deg",})
    .to(sheeprightear, .1, {rotation: "0deg",})
    .to(sheeprightear, .1, {rotation: "-50deg",})
    .to(sheeprightear, .1, {rotation: "0deg",})
    .to(sheeprightear, .1, {rotation: "0deg",})
    .to(sheeprightear, .1, {rotation: "-50deg",})
    .to(sheeprightear, .1, {rotation: "0deg",})
    .to(sheeprightear, .1, {rotation: "-50deg",})
    .to(sheeprightear, .1, {rotation: "0deg",})
    .to(sheeprightear, .1, {rotation: "-50deg",}, 1)
    .to(sheeprightear, .1, {rotation: "0deg",})

// Delayed Ears
var tlsheepleftear2 = new TimelineMax({
    repeat: -1,
    repeatDelay: 3.3,
    delay: 3
});
tlsheepleftear2.to(sheepleftear2, .3, {
        transformOrigin:"100% 20%",
        rotation: "50deg",}, 0)
    .to(sheepleftear2, .2, {rotation: "0deg",})
    .to(sheepleftear2, .1, {rotation: "50deg",})
    .to(sheepleftear2, .1, {rotation: "0deg",})
    .to(sheepleftear2, .1, {rotation: "50deg",})
    .to(sheepleftear2, .1, {rotation: "0deg",})
    .to(sheepleftear2, .1, {rotation: "0deg",})
    .to(sheepleftear2, .1, {rotation: "50deg",})
    .to(sheepleftear2, .1, {rotation: "0deg",})
    .to(sheepleftear2, .1, {rotation: "50deg",})
    .to(sheepleftear2, .1, {rotation: "0deg",})
    .to(sheepleftear2, .1, {rotation: "50deg",}, 1)
    .to(sheepleftear2, .1, {rotation: "0deg", })
//right
var tlsheeprightear2 = new TimelineMax({
    repeat: -1,
    repeatDelay: 3.1,
    delay: 3
});
tlsheeprightear2.to(sheeprightear2, .3, {
        transformOrigin:"0% 20%",
        rotation: "-50deg",}, 0.2)
    .to(sheeprightear2, .2, {rotation: "0deg",})
    .to(sheeprightear2, .1, {rotation: "-50deg",})
    .to(sheeprightear2, .1, {rotation: "0deg",})
    .to(sheeprightear2, .1, {rotation: "-50deg",})
    .to(sheeprightear2, .1, {rotation: "0deg",})
    .to(sheeprightear2, .1, {rotation: "0deg",})
    .to(sheeprightear2, .1, {rotation: "-50deg",})
    .to(sheeprightear2, .1, {rotation: "0deg",})
    .to(sheeprightear2, .1, {rotation: "-50deg",})
    .to(sheeprightear2, .1, {rotation: "0deg",})
    .to(sheeprightear2, .1, {rotation: "-50deg",}, 1)
    .to(sheeprightear2, .1, {rotation: "0deg",})
