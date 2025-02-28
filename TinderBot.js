const preferredTags = ["Monogamia", "Algo casual"];
const shuffleMode = false; // Ativar para escolhas aleatórias
const timeRange = 1; // Intervalo de tempo em segundos
const likeProbability = 80; // Probabilidade de dar like (0 a 100)

function getButtonByBackgroundClass(backgroundClass) {
  return Array.from(document.querySelectorAll('.button')).find(element =>
    element.classList.contains(backgroundClass)
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
  const likeButton = getButtonByBackgroundClass('Bgc($c-ds-background-gamepad-sparks-like-default)');
  const dislikeButton = getButtonByBackgroundClass('Bgc($c-ds-background-gamepad-sparks-nope-default)');

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

function executeWithRandomInterval() {
  clickLikeIfPreferredOtherwiseDislike();
  const randomInterval = timeRange * 1000; // Converte segundos para milissegundos
  setTimeout(executeWithRandomInterval, randomInterval);
}

executeWithRandomInterval();
