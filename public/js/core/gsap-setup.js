export let isCurrentlyDragging = false;
export const ball = document.querySelector(".ball");
export const ballProps = gsap.getProperty(ball);
export const radius = ball.getBoundingClientRect().width / 2;
export let vw = window.innerWidth;
export let vh = window.innerHeight;
export const tracker = InertiaPlugin.track(ball, "x,y")[0];
import { animateBounce } from "./bounce-logic.js";


gsap.set(ball, {
  xPercent: -50,
  yPercent: -50,
  x: vw / 2,
  y: vh / 2,
  rotation: 0
});

gsap.defaults({ overwrite: true });

window.addEventListener("resize", () => {
  vw = window.innerWidth;
  vh = window.innerHeight;
});

export const draggable = Draggable.create(ball, {
  bounds: window,
  onPress() {
    gsap.killTweensOf(ball);
    this.update();
    isCurrentlyDragging = true;
    document.getElementById("form").style.display = "block";
  },
  onRelease() {
    isCurrentlyDragging = false;
  },
  onDragEnd() {
    animateBounce();
  }
})[0];
