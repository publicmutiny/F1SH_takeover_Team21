fetch('https://score-board-afe96bddb988.herokuapp.com/get_scores')
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

  data.sort((a, b) => b.score - a.score);

  const leaderboardTable = document.createElement('table');
  leaderboardTable.classList.add('leaderboard-table');

  const headerRow = document.createElement('tr');
  const headerPosition = document.createElement('th');
  headerPosition.textContent = 'Position';
  const headerName = document.createElement('th');
  headerName.textContent = 'Name';
  const headerScore = document.createElement('th');
  headerScore.textContent = 'Score';

  headerRow.appendChild(headerPosition);
  headerRow.appendChild(headerName);
  headerRow.appendChild(headerScore);
  leaderboardTable.appendChild(headerRow);

  data.forEach((entry, index) => {
    const row = document.createElement('tr');

    const positionCell = document.createElement('td');
    positionCell.textContent = index + 1;
    const nameCell = document.createElement('td');
    nameCell.textContent = entry.player;
    const scoreCell = document.createElement('td');
    scoreCell.textContent = entry.score.toFixed(1) + "%";

    row.appendChild(positionCell);
    row.appendChild(nameCell);
    row.appendChild(scoreCell);
    leaderboardTable.appendChild(row);
  });

  leaderboardContainer.appendChild(leaderboardTable);
}
