const nav = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <div id="head">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Abel&family=Exo+2:ital,wght@0,400;1,100&family=Orbitron:wght@400;600&family=Play:wght@700&family=Poppins:wght@200;300&family=Teko:wght@600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/styles.css" />
        <title>Document</title>
        </head>
          <div id="header">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/players">Players</a></li>
                <li><a href="/create">Create</a></li>
              </ul>
            </nav>
          </div>  
`;

// const form = `
//     <form method="POST" id="player-form">
//       <input name ="name" placeholder="player name"></input>
//       <input name ="no" placeholder="player number"></input>
//       <input name ="position" placeholder="position"></input>
//       <input name ="age" placeholder="age"></input>
//       <textarea name="bio" placeholder="player bio"></textarea>
//       <button>Create</button>
//     </form>
// `;

module.exports = {
  nav
}