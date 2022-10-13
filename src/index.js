import Players from './modules/index.js';
import './style.css';

// Name and score selectors from the form field to be entered.
const form = document.querySelector('.form-input');
const [name, score] = form.elements;
let keyGame;
const btnRefresh = document.querySelector('.btn-refresh');
const responsePost = document.querySelector('.response-post');
const listPlayers = document.querySelector('.list-players');
const spinner = document.querySelector('.spinner');
const objPlayers = new Players();
const urlNewGame = `
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`;
const nameGame = { name: "Bamidele's cool name" };

// Local Storage condition to store players and input
if (localStorage.savedPlayers) {
  objPlayers.players = JSON.parse(localStorage.getItem('savedPlayers'));
}

const keyNewGameAPIs = async () => {
  const response = await fetch(urlNewGame, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    body: JSON.stringify(nameGame),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.result.slice(14, 34);
};

if (localStorage.keyGame) {
  keyGame = localStorage.getItem('keyGame');
} else {
  const loadKey = async () => {
    keyGame = await keyNewGameAPIs();
    localStorage.setItem('keyGame', keyGame);
  };
  loadKey();
}

const getAPIs = async () => {
  listPlayers.classList.add('hidden');
  spinner.classList.remove('hidden');
  const response = await fetch(`
    https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${keyGame}/scores`);
  const data = await response.json();
  objPlayers.players = data.result;
  listPlayers.classList.remove('hidden');
  spinner.classList.add('hidden');
  objPlayers.playerDisplay();
  return data.result;
};

const postPlayer = async (newPlayer) => {
  const response = await fetch(
    `
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${keyGame}/scores`,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      body: JSON.stringify(newPlayer),
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data.result;
};

// Acion to be performerd
// When  user clicks on the entries
// from the form on the page
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPlayer = {
    name: name.value,
    score: score.value,
  };
  responsePost.textContent = await postPlayer(newPlayer);
  name.value = '';
  score.value = '';
  setTimeout(() => {
    responsePost.textContent = '';
  }, 3000);
});

// The refresh event passed with the API Function
// Then it gets displayed on the browers by 
// The olayerDisplay function whn called
btnRefresh.addEventListener('click', getAPIs);
objPlayers.playerDisplay();
objPlayers.populateFields();
