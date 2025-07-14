import { db } from "./firebase-config.js";

export function mostrarPseudonimos(pseudonimosDiv, counterDiv) {
  db.collection("pseudonimos")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      pseudonimosDiv.innerHTML = "<strong>Pseudónimos:</strong><br>" +
        snapshot.docs.map(doc => `• ${doc.data().nombre}`).join("<br>");
      counterDiv.textContent = `Jugadores registrados: ${snapshot.size}`;
    });
}
