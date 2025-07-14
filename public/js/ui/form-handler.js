import { db } from "../firebase/firebase-config.js";

export function initForm() {
  const form = document.getElementById("form");
  const input = document.getElementById("nickname");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pseudonimo = input.value.trim();
    if (!pseudonimo) return;

    try {
      await db.collection("pseudonimos").add({
        nombre: pseudonimo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      localStorage.setItem("pseudonimo", pseudonimo);
      input.value = "";
      form.style.display = "none";
    } catch (error) {
      console.error("Error al guardar en Firebase:", error);
    }
  });

  const guardado = localStorage.getItem("pseudonimo");
  if (guardado) input.value = guardado;

  document.getElementById("resetBtn").addEventListener("click", () => location.reload());
}
