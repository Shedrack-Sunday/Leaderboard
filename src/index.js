import Players from './modules/index.js';
import './style.css';

// Name and score selectors from the form field to be entered.
const [name, score] = form.elements;
const form = document.querySelector('.form-input');
const objPlayers = new Players();

// Local Storage condition to store players and input
if (localStorage.savedPlayers) {
  objPlayers.players = JSON.parse(localStorage.getItem('savedPlayers'));
}


// Acion to be performerd
// When  user clicks on the entries 
// from the form on the page
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newPlayer = {
    name: name.value,
    score: score.value,
  };
  objPlayers.addPlayer(newPlayer);
  name.value = '';
  score.value = '';
});

objPlayers.display();

// Displays the player objects and store the currnet state on localStorage.
objPlayers.populateFields();