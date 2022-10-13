
// The player list class selected
const listPlayers = document.querySelector('.list-players');

/* class declaration with methods o be 
called opon based on the user actions */
const Players = class {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.players = [];
  }

  // Local Storage settting
  populateFields = () => {
    localStorage.setItem('savedPlayers', JSON.stringify(this.players));
  };

  // Method to remove entry using the filter method
  removePlayer(player) {
    const result = this.players.filter((b) => b !== player);
    this.players = result;
    this.populateFields();
  }

  // Method to add a player based on user entries
  // then displayers the new entries and store the
  // new results on localStorage
  addPlayer = (newPlayer) => {
    this.players.push(newPlayer);
    this.populateFields();
    this.displayPlayers();
  };

  // A special object to displayer players using the map
  // method.
  display = () => {
    listPlayers.innerHTML = ''; // the class id to displayer the players is selected to pass input.
    if (this.players.length > 0) {
      this.players.map((player) => {
        const playerDiv = document.createElement('tr');
        const elementPlayer = document.createElement('td');
        elementPlayer.textContent = `${player.name}: ${player.score}`;
         playerDiv.classList.add('player-container');
        playerDiv.appendChild(elementPlayer);
        listPlayers.appendChild(playerDiv);
        return listPlayers;
      });
    } else {
      const playerDiv = document.createElement('tr');
      const elementPlayer = document.createElement('td');
      elementPlayer.textContent = 'Add new player';
      playerDiv.classList.add('player-container');
      playerDiv.appendChild(elementPlayer);
      listPlayers.appendChild(playerDiv);
    }
  };
};

export default Players;