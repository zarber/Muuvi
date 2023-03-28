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
