


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition(e){
  if(e.propertyName !== 'transform'){
    return;
  }
  this.classList.remove('playing');
}

function onKeyPress(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) {
    return
  }
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing')
}

window.addEventListener('keydown', onKeyPress);
