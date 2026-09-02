
let axisXpostion = 0
let axisYpostion = 0
let mousePositionX = 0
let mousePositionY = 0
let dotPositionX = 0
let dotPositionY = 0

const cursorFollower = document.querySelector(".cursor-follower");
const cursorFollowerDot = document.querySelector(".cursor-follower-dot");

document.addEventListener("mousemove", (event) => {
    mousePositionX = event.pageX
    mousePositionY = event.pageY

    console.log(mousePositionX, mousePositionY);
    
})

setInterval(() => {
    axisXpostion = (axisXpostion + (mousePositionX - axisXpostion) / 15);
    axisYpostion = (axisYpostion + (mousePositionY - axisYpostion) / 15);
    console.log(axisXpostion, axisYpostion);

    cursorFollower.style.top = axisYpostion + "px";
    cursorFollower.style.left = axisXpostion + "px";
    
}, 20);


setInterval(() => {
    dotPositionX = (dotPositionX + (mousePositionX - dotPositionX) / 25);
    dotPositionY = (dotPositionY + (mousePositionY - dotPositionY) / 25);
    console.log(axisXpostion, axisYpostion);

    cursorFollowerDot.style.top = dotPositionY + "px";
    cursorFollowerDot.style.left = dotPositionX + "px";
    
}, 20);