// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti(); 
  const hornimages = document.querySelector('#expose img');
  const hornselect = document.querySelector('#horn-select');
  const volume = document.querySelector('#volume');
  const button = document.querySelector('#expose button');

  hornselect.addEventListener('change', () => {
    if(hornselect.value == "air-horn") {
      hornimages.src = 'assets/images/air-horn.svg';
    } else if(hornselect.value === "car-horn") {
      hornimages.src = 'assets/images/car-horn.svg';
    } else if(hornselect.value === "party-horn") {
      hornimages.src = 'assets/images/party-horn.svg';
    } else {
        return;
    }
    });

  volume.addEventListener('change', () => {
    if(volume.value == 0) {
      volume.src = 'assets/icons/volume-level-0.svg';
    } else if(volume.value > 0  && volume.value < 33) {
      volume.querySelector('#volume-controls img').src = 'assets/icons/volume-level-1.svg';
    } else if(volume.value > 32 && volume.value < 67) {
      volume.querySelector('#volume-controls img').src = 'assets/icons/volume-level-2.svg';
    } else if(volume.value > 66 && volume.value < 100) {
      volume.querySelector('#volume-controls img').src = 'assets/icons/volume-level-3.svg';
    } else {
      return;
    }
    });
  
    button.addEventListener('click', () => {
      if(hornselect.value == "air-horn") {
        var airhorn = new Audio("assets/audio/air-horn.mp3");
        airhorn.volume = parseFloat(volume.value)/100; 
        airhorn.play();
      } else if(hornselect.value === "car-horn") {
        var carhorn = new Audio("assets/audio/car-horn.mp3");
        carhorn.volume = parseFloat(volume.value)/100; 
        carhorn.play();
      } else if(hornselect.value === "party-horn") {
        jsConfetti.addConfetti();
        var partyhorn = new Audio("assets/audio/party-horn.mp3");
        partyhorn.volume = parseFloat(volume.value)/100; 
        partyhorn.play();
      } else {
        return;
      }
    });
}
