fetch('https://cors-anywhere.herokuapp.com/https://score-board-afe96bddb988.herokuapp.com/get_scores')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderLeaderboard(data);
  })
  .catch(error => {
    console.error('Error fetching leaderboard:', error);
  });

function renderLeaderboard(data) {
  const leaderboardContainer = document.getElementById('leaderboard-container');
  leaderboardContainer.innerHTML = '';

  const leaderboardList = document.createElement('ul');
  leaderboardList.classList.add('leaderboard-list');

  data.forEach(entry => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.username}: ${entry.score}`;
    leaderboardList.appendChild(listItem);
  });

  leaderboardContainer.appendChild(leaderboardList);
}

