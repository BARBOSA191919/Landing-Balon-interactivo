import "./core/gsap-setup.js";
import { animateBounce } from "./core/bounce-logic.js";
import { initForm } from "./ui/form-handler.js";
import { mostrarPseudonimos } from "./firebase/pseudonimos.js";
import { db } from "./firebase/firebase-config.js";

// DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  initForm();
  mostrarPseudonimos(
    document.getElementById("pseudonimos"),
    document.getElementById("counter")
  );

  // Mouse fuera de pantalla
  document.addEventListener("mouseout", (e) => {
    if (
      e.relatedTarget === null &&
      window.isCurrentlyDragging &&
      window.draggable.isDragging
    ) {
      const x = ballProps("x");
      const y = ballProps("y");
      const vx = tracker.get("x") * 2;
      const vy = tracker.get("y") * 2;
      draggable.endDrag(e);
      window.isCurrentlyDragging = false;
      animateBounce(x, y, vx, vy);
    }
  });
});
