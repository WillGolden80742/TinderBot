function getRandomBoolean() {
  return Math.random() < 0.5;
}

function clickRandomButton() {
  const likeButton = document.querySelector('button[aria-label="Curti"]');
  const dislikeButton = document.querySelector('button[aria-label="Não Curti"]');

  if (!likeButton || !dislikeButton) {
    console.error("Botões não encontrados. Certifique-se de que está na página certa.");
    return;
  }

  const randomChoice = getRandomBoolean();

  randomChoice ? likeButton.click() : dislikeButton.click();
}

function executeWithRandomInterval() {
  clickRandomButton();
  const randomInterval = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  setTimeout(executeWithRandomInterval, randomInterval);
}

executeWithRandomInterval();
