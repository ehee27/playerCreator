const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/playerdb');
const { STRING, INTEGER, TEXT } = require('sequelize');

const Player = db.define("Player", {
  name: {
    type: STRING,
    allowNull: false
  },
  no: {
    type: INTEGER,
    allowNull: false
  },
  position: {
    type: STRING,
    allowNull: false
  },
  age: {
    type: INTEGER,
    allowNull: false
  },
  bio: {
    type: TEXT,
    allowNull: false
  },
  team_id: {
    type: INTEGER
  }
});

const Team = db.define("Team", {
  name: {
    type: STRING,
    allowNull: false
  }
})

Player.hasOne(Team, {
  foreignKey: {
    name: 'team_id',
    type: INTEGER
  }
});

Team.belongsTo(Player);


const syncAndSeed = async () => {
  // same as DROP TABLE IF EXISTS
  await db.sync( { force: true } );

  await Team.create({name: 'Hawks'});
  await Team.create({name: 'Pirates'});
  await Team.create({name: 'Angels'});

  await Player.create({name: 'Scott Lucas', no: 27, position: '1B', age: 40, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 1});

  await Player.create({name: 'Truan Mehl', no: 24, position: 'CF', age: 38, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 1});

  await Player.create({name: 'Chris Nicholas', no: 5, position: 'C', age: 39, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 1});

  await Player.create({name: 'Cole Essington', no: 13, position: 'SS', age: 40, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 2});

  await Player.create({name: 'Dave Warner', no: 11, position: '2B', age: 38, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 2});

  await Player.create({name: 'Matt Myers', no: 14, position: 'RF', age: 39, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 2});

  await Player.create({name: 'Nathan "Bubba" Roseman', no: 21, position: '1B', age: 40, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 3});

  await Player.create({name: 'Jason Shanker', no: 35, position: 'LF', age: 39, bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rerum dolorem magni, facilis deleniti amet odit tempore incidunt sunt ad suscipit voluptatum ab animi reiciendis veniam quaerat vitae perferendis blanditiis officiis atque ea. Enim sint neque, at ipsa nobis voluptas quas quos velit perspiciatis quaerat architecto iste minus suscipit obcaecati.", team_id: 3});
};

module.exports = {
  db,
  syncAndSeed,
  Player,
  Team
};