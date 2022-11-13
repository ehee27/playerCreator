const { Player, Team } = require('../db');
const router = require('express').Router();
const { nav } = require('../utils');


// teams //////////////////////////////////////////////
router.get('/', async (req, res, next) => {
  try {
    const teams = await Team.findAll();
    res.send(`
      ${nav}
          <body>
            <div id="container">
              <h1>TEAMS</h1>
              <ul>
                ${teams.map(team => `
                <li><a href="/teams/${team.id}">${team.name}</a></li>
                `).join('')}
              </ul>
              <button><a href="/create">CREATE PLAYER</a></button>
            </div>
          </body>
        </html>
      `)
  } catch (error) {
    next(error)
  }
});


// Team ID ////////////////////////////////////////////
router.get('/:id', async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.id);
    const players = await Player.findAll({
      where: { team_id: req.params.id}
    });
    res.send(`
      ${nav}
          <body>
            <div id="container">
              <h1>${team.name}</h1>
              <div id="player-specs">
                <ul>
                ${players.map(player => `
                <li><a href="/players/${player.id}">${player.name}</a></li>
                `).join('')}
                <ul>
              </div>
              
            </div>
          </body>
        </html>
      `)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
