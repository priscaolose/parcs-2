// Sample leaderboard data
const leaderboardData = [
    { rank: 1, UserName: 'PLACE HOLDER'},
    { rank: 2, UserName: 'PLACE HOLDER'},
    { rank: 3, UserName: 'PLACE HOLDER'},
    { rank: 4, UserName: 'PLACE HOLDER' },
    { rank: 5, UserName: 'PLACE HOLDER'},
    { rank: 6, UserName: 'PLACE HOLDER'},
    { rank: 7, UserName: 'PLACE HOLDER'},
    { rank: 8, UserName: 'PLACE HOLDER'},
    { rank: 9, UserName: 'PLACE HOLDER' },
    { rank: 10, UserName: 'PLACE HOLDER'}
  ];
  
  // Encapsulate Variable
  class Leaderboard {
        constructor(data) {
        this._data = data;
        }
    
        get data() {
        return this._data;
        }
    
        set data(data) {
        this._data = data;
        }

    // Extract Method
        makeBoard() {
            const leaderboardTable = document.getElementById('leaderboard');
            const leaderboardBody = leaderboardTable.querySelector('tbody');
        
            leaderboardBody.innerHTML = '';
        
            this.data.forEach(user => {
              const row = document.createElement('tr');
              row.innerHTML = `
                <td>${user.UserName}</td>
                <td>${user.rank}</td>
              `;
              leaderboardBody.appendChild(row);
            });
          }
    }
        
    
  const leaderboard = new Leaderboard(leaderboardData);
  leaderboard.makeBoard();
  