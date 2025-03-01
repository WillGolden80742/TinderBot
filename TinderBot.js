const preferredTags = ["Monogamia", "Algo casual"];
const shuffleMode = false; // Ativar para escolhas aleatórias
const timeRange = 2; // Intervalo de tempo em segundos
const likeProbability = 70;  // Probabilidade de dar like (0 a 100)

function getButtonByText(text) {
  return Array.from(document.querySelectorAll('button')).find(button =>
    button.querySelector('span.Hidden')?.textContent.includes(text)
  );
}

function isPreferredTagPresent() {
  return Array.from(document.querySelectorAll('div')).some(div =>
    preferredTags.some(tag => div.textContent.includes(tag))
  );
}

function getRandomBoolean(probability) {
  return Math.random() * 100 < probability;
}

function clickLikeIfPreferredOtherwiseDislike() {
  const likeButton = getButtonByText("Curtir");
  const dislikeButton = getButtonByText("Não");

  if (!likeButton || !dislikeButton) {
    console.error("Botões não encontrados. Certifique-se de que está na página correta.");
    return;
  }

  if (shuffleMode) {
    getRandomBoolean(likeProbability) ? likeButton.click() : dislikeButton.click();
  } else {
    if (isPreferredTagPresent()) {
      likeButton.click();
    } else {
      dislikeButton.click();
    }
  }
}

function openProfileAndDecide() {
  const profileButton = getButtonByText("Abrir perfil");
  if (profileButton) {
    profileButton.click();
    setTimeout(clickLikeIfPreferredOtherwiseDislike, 2000); // Aguarda 2s antes de decidir
  } else {
    clickLikeIfPreferredOtherwiseDislike();
  }
}

function executeWithInterval() {
  openProfileAndDecide();
  const randomErrorMargin = Math.random() * 500; // Adiciona uma margem de erro aleatória de até 500ms
  setTimeout(executeWithInterval, (timeRange * 1000) + randomErrorMargin);
}

executeWithInterval();
