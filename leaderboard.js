// Sample leaderboard data
const leaderboardData = [
  { rank: 1, name: 'PLACE HOLDER'},
  { rank: 2, name: 'PLACE HOLDER'},
  { rank: 3, name: 'PLACE HOLDER'},
  { rank: 4, name: 'PLACE HOLDER' },
  { rank: 5, name: 'PLACE HOLDER'}
];


function makeBoard() {
  const leaderboardTable = document.getElementById('leaderboard');
  const leaderboardBody = leaderboardTable.querySelector('tbody');


  leaderboardBody.innerHTML = '';


  leaderboardData.forEach(player => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.rank}</td>
      <td>${player.name}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

makeBoard();
