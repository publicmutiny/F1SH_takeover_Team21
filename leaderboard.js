fetch('http://34.39.12.110:3000/leaderboard')
  .then(response => response.json())
  .then(data => {
    renderLeaderboard(data);
  })
  .catch(error => {
    console.error('Error fetching leaderboard:', error);
  });

  function renderLeaderboard(data) {
    const leaderboardContainer = document.getElementById('leaderboard-container');
    leaderboardContainer.innerHTML = ''; // Clear previous data
  
    const leaderboardList = document.createElement('ul');
    leaderboardList.classList.add('leaderboard-list');
  
    data.forEach(entry => {
      const listItem = document.createElement('li');
      listItem.textContent = `${entry.username}: ${entry.score}`;
      leaderboardList.appendChild(listItem);
    });
  
    leaderboardContainer.appendChild(leaderboardList);
  }
  