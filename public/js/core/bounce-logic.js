import { ball, ballProps, radius, vw, vh, tracker, draggable, isCurrentlyDragging } from "./gsap-setup.js";

export function animateBounce(x = "+=0", y = "+=0", vx = "auto", vy = "auto") {
  const velocityX = tracker.get("x");
  const velocityY = tracker.get("y");
  const velocityMagnitude = Math.sqrt(velocityX ** 2 + velocityY ** 2);
  const direction = velocityX >= 0 ? 1 : -1;
  const angularVelocity = direction * velocityMagnitude * 0.25;
  const currentRotation = ballProps("rotation");

  gsap.to(ball, {
    rotation: currentRotation + angularVelocity,
    duration: 2,
    ease: "power2.out"
  });

  gsap.fromTo(ball, { x, y }, {
    inertia: { x: vx, y: vy },
    onUpdate: checkBounds
  });
}

function squash(axis, velocity) {
  const absVelocity = Math.abs(velocity);
  const impact = gsap.utils.clamp(0.01, 0.1, absVelocity / 200);
  const squashProps = axis === "x"
    ? { scaleX: 1 - impact * 0.9, scaleY: 1 + impact * 0.6 }
    : { scaleX: 1 + impact * 0.6, scaleY: 1 - impact * 0.9 };

  gsap.timeline()
    .to(ball, {
      ...squashProps,
      duration: 0.1,
      ease: "power2.out",
      transformOrigin: "center"
    })
    .to(ball, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.25,
      ease: "power2.out"
    });
}

export function checkBounds() {
  const r = radius;
  let x = ballProps("x");
  let y = ballProps("y");
  let vx = tracker.get("x");
  let vy = tracker.get("y");

  if (x + r > vw || x - r < 0) {
    squash("x", vx);
    vx *= -0.5;
    x = x + r > vw ? vw - r : r;
    animateBounce(x, y, vx, vy);
  }

  if (y + r > vh || y - r < 0) {
    squash("y", vy);
    vy *= -0.5;
    y = y + r > vh ? vh - r : r;
    animateBounce(x, y, vx, vy);
  }
}
