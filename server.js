const { db, syncAndSeed, Player, Team } = require('./db');
const express = require('express');
const app = express();
const path = require('path');
const { nav } = require('./utils');
const playersRoute = require('./routes/players');
const teamsRoute = require('./routes/teams');


// routes modules
app.use('/players', playersRoute);
app.use('/teams', teamsRoute);

// process form POST requests
app.use(express.urlencoded( { extended: false }));

// player creater 
app.use(require('method-override')('_method'));

// styles.css
app.get('/styles.css', (req, res) => res.sendFile(path.join(__dirname, '/styles.css')));


// home //////////////////////////////////////////////////////
app.get('/', async (req, res, next) => {
  try {
  res.send(`
      ${nav}
          <body>
            <div id="container">
              <h1>PLAYER CREATOR</h1>
              <p>Select from the buttons in the navigation menu. Click TEAMS to view a list of availble teams. Click any individual team to view all player's currently on that roster.<br>
              <br>
              Click PLAYERS to view all current players in the database. You can also click a player's name to view their complete profile.</p>
              <p>Select the <a href="/create">CREATE</a> page to create a new player profile and assign them to a team.</p>
            </div>
          </body>
        </html>
      `)
  } catch (error) {
    next(error)
  };
});


// create player //////////////////////////////////////////////
app.get('/create', async (req, res, next) => {
  try {
    const teams = await Team.findAll();
  res.send(`
      ${nav}
          <body>
            <div id="container">
            <h1>CREATE PLAYER</h1>
            <p>Use the form to create a player profile and assign them to a team.</p>
              <form method="POST" id="player-form">
                <input name ="name" placeholder="player name"></input>
                <select name="team_id" placeholder="team">
                ${teams.map(team => `
                <option value="${team.id}">${team.name}</option>
                `).join('')}
                </select>
                <input name ="no" placeholder="player number"></input>
                <input name ="position" placeholder="position"></input>
                <input name ="age" placeholder="age"></input>
                <textarea name="bio" placeholder="player bio"></textarea>
                <button>CREATE</button>
              </form>
            </div>
          </body>
        </html>
      `)
  } catch (error) {
    next(error)
  }
});


// POST - create player ////////////////////////////////////////
app.post('/create', async (req, res, next) => {
  try {
    const player = await Player.create(req.body);
    res.redirect(`/players/${player.id}`);
    
  } catch (error) {
    next(error)
  }
});


// POST - delete player /////////////////////////////////////
app.delete('/players/:id', async (req, res, next) => {
  try {
    const player = await Player.findByPk(req.params.id);
    await player.destroy();
    res.redirect(`/players`);
    
  } catch (error) {
    next(error)
  }
});


// initialize /////////////////////////////////////////////////
const init = async () => {
  try {
    await db.authenticate();
    await syncAndSeed();
    const port = (process.env.PORT || 3000);
    app.listen(port, () => console.log(`listening on port ${port}`)); 
    
  } catch (error) {
    console.log(error)
  }
};

init();





