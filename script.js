let currentAudio = null;
let currentText = null;

function togglePlay(element) {
  const audio = element.querySelector("audio");

  // Se o mesmo áudio for clicado
  if (audio === currentAudio) {
    if (audio.paused) {
      audio.play();
      element.firstChild.textContent =
        "▶ " + element.firstChild.textContent.slice(2);
    } else {
      audio.pause();
      element.firstChild.textContent =
        "▶ " + element.firstChild.textContent.slice(2);
    }
    return;
  }

  // Pausar o áudio anterior, se houver
  if (currentAudio) {
    currentAudio.pause();
    if (currentText) {
      currentText.firstChild.textContent =
        "▶ " + currentText.firstChild.textContent.slice(2);
    }
  }

  // Tocar o novo áudio
  audio.play();
  element.firstChild.textContent =
    "❚❚ " + element.firstChild.textContent.slice(2);

  // Atualizar referência
  currentAudio = audio;
  currentText = element;

  // Quando terminar o áudio, resetar ícone
  audio.onended = () => {
    element.firstChild.textContent =
      "▶ " + element.firstChild.textContent.slice(2);
    currentAudio = null;
    currentText = null;
  };
}
