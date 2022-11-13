const { Player, Team } = require('../db');
const router = require('express').Router();
const { nav } = require('../utils');


// players //////////////////////////////////////////////
router.get('/', async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.send(`
      ${nav}
          <body>
            <div id="container">
              <h1>PLAYERS</h1>
              <div id="player-list">
                <em><p>click any name to view profile</p></em>
                  <ul>
                    ${players.map(player => `
                    <li><a href="/players/${player.id}">${player.name}</a></li>
                    `).join('')}
                  </ul>
              </div>
              <button><a href="/create">CREATE PLAYER</a></button>
            </div>
          </body>
        </html>
      `)
  } catch (error) {
    next(error)
  }
});


// player ID ////////////////////////////////////////////
router.get('/:id', async (req, res, next) => {
  try {
    const player = await Player.findByPk(req.params.id);
    const team = await Team.findByPk(player.team_id);
    res.send(`
      ${nav}
          <body>
            <div id="container">
              <h1>PLAYER PROFILE</h1>
              <p>Team</p>
              <span id="team">${team.name}</span>
              <div id="player-specs">
                <ul>
                  <li>${player.name}</li>
                  <li>Pos: ${player.position}</li>
                  <li>Age: ${player.age}</li>
                <ul>
              </div>
                <div id="bio">
                  ${player.bio}
                </div>
              <form method="POST" id="player-delete" action="/players/${player.id}?_method=DELETE">
              <button id="delete">DELETE PLAYER</button>
            </div>
          </body>
        </html>
      `)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
