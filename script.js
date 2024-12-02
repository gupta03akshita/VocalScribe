// SELECT TEXTS CONTAINER
const texts = document.querySelector(".texts");

// SETUP SPEECH RECOGNITION (with a fallback for webkit prefix)
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// CREATE RECOGNITION INSTANCE
  const recognition = new SpeechRecognition();

// ENABLE INTERIM RESULTS (for live transcriptions)
recognition.interimResults = true;

let p = document.createElement("p");

// LISTEN FOR RESULT EVENT (when speech is transcribed)
recognition.addEventListener("result", (e) => {
  texts.appendChild(p);

  // COMBINE TRANSCRIPT RESULTS
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
});

// RESTART RECOGNITION AFTER END
recognition.addEventListener("end", () => {
  recognition.start();
});

// START SPEECH RECOGNITION
recognition.start();