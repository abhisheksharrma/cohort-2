import './style.css'


const cursor = document.querySelector(".cursor")

const lerp = (a, b , n) => (1 - n) * a + n * b;
const clamp = (min, max, v) => Math.max(min, Math.min(max, v));
const dist = (x1, y1, x2, y2) => Math.hypot(x2-x1, y2-y1)


let mouseX = 9999;
let mouseY = 9999;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX
  mouseY = event.clientY
});

let cx = mouseX;
let cy = mouseY;
let lastX = mouseX;
let lastY = mouseY;


function cursorAnimate() {
  cx = lerp(cx, mouseX, 0.20);
  cy = lerp(cy, mouseY, 0.20);


  const vx = mouseX - lastX;
  const vy = mouseY - lastY;
  lastX = mouseX;
  lastY = mouseY;

  const speed = clamp(Math.hypot(vx,vy), 0, 40);
  const stretch = 1 + speed / 60;
  const angle = Math.atan2(vx, vy) * ( 180 / Math.PI);

  cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) rotate(${angle}deg) scaleX(${stretch}) scaleY(${1 / (stretch * 0.4 + 0.6)})`;

  requestAnimationFrame(cursorAnimate)

}

cursorAnimate()

