function openModal(buttonText) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const close = document.getElementsByClassName('close')[0];
  
    title.textContent = buttonText;
    modal.style.display = 'block';
  
    close.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
    const buttonIDs = ['infopankki', 'liikuntasuunnitelma', 'aktiviteetit'];
    buttonIDs.forEach(id => {
      const button = document.getElementById(id);
      button.addEventListener('click', () => openModal(button.textContent));
    });
  });
  
function topNavFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "navigation") {
      x.className += "responsive";
    } else {
      x.className = "navigation";
    }
  }

const aphorisms = [
    '"Liikunta on parasta terveydenhoitoa."',
    '"Liikunta lisää hyvää oloa."',
    '"Et koskaan tiedä rajojasi, ellet ylitä niitä."',
    '"Pitkäkin matka täytyy aloittaa yhdellä askelella."',
    '"Kaikki on mahdollista. Mahdottoman toteuttaminen vain vie hieman enemmän aikaa."',
    '"Tulevaisuus tulee. Vain sinä voit päättää, mihin se menee."',
    '"Tee yksi ihminen onnelliseksi joka päivä — vaikkapa se olisit sinä itse."',
    '"Jokainen voi kuntoilla omien voimiensa mukaan."',
    '"Loppujen lopuksi kadumme vain mahdollisuuksia, joihin emme tarttuneet."',
    '"Sinun täytyy odottaa asioita itseltäsi ennen kuin pystyt niihin."',
    '"Se ei ole vuori, jonka valloitamme, vaan itsemme."'
  ];

var randomAphorism = Math.floor(Math.random()*aphorisms.length);
document.getElementById("aphorism").innerText = aphorisms[randomAphorism];

  
