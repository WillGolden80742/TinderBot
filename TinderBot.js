function getRandomBoolean() {
  return Math.random() < 0.5;
}

function getButtonByBackgroundClass(backgroundClass) {
  return Array.from(document.querySelectorAll('.button')).find(element => element.classList.contains(backgroundClass));
}

function clickRandomButton() {
  const likeButton = getButtonByBackgroundClass('Bgi($g-ds-background-like):a');
  const dislikeButton = getButtonByBackgroundClass('Bgi($g-ds-background-nope):a');

  if (!likeButton || !dislikeButton) {
    console.error("Botões não encontrados. Certifique-se de que está na página certa.");
    return;
  }

  const randomChoice = getRandomBoolean();

  randomChoice ? likeButton.click() : dislikeButton.click();
}

function executeWithRandomInterval() {
  clickRandomButton();
  const randomInterval = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  setTimeout(executeWithRandomInterval, randomInterval);
}

executeWithRandomInterval();
