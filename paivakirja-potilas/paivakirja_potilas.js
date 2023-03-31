document.addEventListener('DOMContentLoaded', () => {
    const diaryForm = document.querySelector('form');
    const diaryEntries = document.querySelector('#diary_entries');
    
    diaryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const date = document.querySelector('#diary_date').value;
      const content = document.querySelector('textarea').value;
      const activeEmoji = document.querySelector('.emoji-active');
      
      const li = document.createElement('li');
      li.textContent = `${date}: ${content}`;
      
      if (activeEmoji) {
        const emojiClone = activeEmoji.cloneNode(true);
        li.appendChild(emojiClone);
      }

      diaryEntries.appendChild(li);
      
      document.querySelector('textarea').value = '';
    });
    
    // Emoji click handling
    const emojis = document.querySelectorAll('.emoji');
    
    emojis.forEach(emoji => {
      emoji.addEventListener('click', (event) => {
        // Remove the 'emoji-active' class from all other emojis
        emojis.forEach(otherEmoji => {
          if (otherEmoji !== event.target) {
            otherEmoji.classList.remove('emoji-active');
          }
        });
  
        // Toggle the 'emoji-active' class for the clicked emoji
        event.target.classList.toggle('emoji-active');
      });
    });
  
    //  Shows activities list when pressing the button
    const activitiesButton = document.querySelector('#activities');
    const activitiesList = document.querySelector('.activities');
  
    activitiesButton.addEventListener('click', () => {
      activitiesList.toggleAttribute('hidden');
    });
  });
  
  