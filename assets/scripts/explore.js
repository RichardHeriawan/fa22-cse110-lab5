// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const playButton = document.querySelector('#explore button'); 
  const textInput = document.getElementById("text-to-speak"); 
  const smileyface = document.querySelector('#explore img');
  const select = document.getElementById("voice-select");

  let voices;
  let currentVoice; 

  const populateVoices = () => {
    const availableVoices = speechSynthesis.getVoices();
    select.innerHTML = '';

    availableVoices.forEach(voice => {
      const option = document.createElement('option');
      let optionText = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        optionText += ' [default]';
        if (typeof currentVoice === 'undefined') {
          currentVoice = voice;
          option.selected = true;
        }
      }
      if (currentVoice === voice) {
        option.selected = true;
      }
      option.textContent = optionText;
      select.appendChild(option);
    });
    voices = availableVoices;
  };

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  select.addEventListener('change', event => {
    const selectedIndex = event.target.selectedIndex;
    currentVoice = voices[selectedIndex];
  });

  playButton.addEventListener('click', () => {
    playText(textInput.value); 
  })

  function playText(text) { 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = currentVoice;
    smileyface.src = "assets/images/smiling-open.png";
    utterance.addEventListener('end', () => {
      smileyface.src = "assets/images/smiling.png";
    })
    speechSynthesis.speak(utterance); 
  }
}