function playsound(e) {
  const data = e.path[1].dataset.key || e.keyCode;
  const key = document.querySelector(`div[data-key="${data}"]`);
  const audio = document.querySelector(`audio[data-key="${data}"]`);
  //console.log(data, key, audio);
  if (!audio) return; //stop the fcuntion from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //remove only if transform propert is not there
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", playsound);
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playsound);
