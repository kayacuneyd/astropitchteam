function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateTeams() {
    const input = document.getElementById("playerInput").value;
    let players = input.split('\n').map(p => p.trim()).filter(p => p.length > 0);

    if (players.length < 2) {
      alert("En az 2 oyuncu giriniz.");
      return;
    }

    players = shuffleArray(players);
    const half = Math.ceil(players.length / 2);
    const team1 = players.slice(0, half);
    const team2 = players.slice(half);

    document.getElementById("team1").innerHTML = team1.map(p => `<li>${p}</li>`).join('');
    document.getElementById("team2").innerHTML = team2.map(p => `<li>${p}</li>`).join('');
  }