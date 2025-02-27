const preferredTags = ["Monogamia", "Algo casual"];

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

function clickLikeIfPreferredOtherwiseDislike() {
  const likeButton = getButtonByBackgroundClass('Bgc($c-ds-background-gamepad-sparks-like-default)');
  const dislikeButton = getButtonByBackgroundClass('Bgc($c-ds-background-gamepad-sparks-nope-default)');

  if (!likeButton || !dislikeButton) {
    console.error("Botões não encontrados. Certifique-se de que está na página correta.");
    return;
  }

  if (isPreferredTagPresent()) {
    likeButton.click();
  } else {
    dislikeButton.click();
  }
}

function executeWithRandomInterval() {
  clickLikeIfPreferredOtherwiseDislike();
  const randomInterval = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  setTimeout(executeWithRandomInterval, randomInterval);
}

executeWithRandomInterval();
