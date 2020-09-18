function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the fcuntion from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  console.log(audio);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //remove only if transform propert is not there
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playsound);
