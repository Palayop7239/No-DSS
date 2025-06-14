const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 50065;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Custom-Content-Type', 'Authorization'],
})); 

// logging into database
const connection = mysql.createConnection({
  host: '0.0.0.0', //locally hosted database
  user: 'admin',
  password: 'password_if_theres_one',
  database: 'database_name'
});


connection.connect(err => {
  if (err) {
    console.error('database connection error', err.stack);
    return;
  }
  console.log('connected to database');
});

// saving
app.post('/save-player', (req, res) => {
  const { userId, saveData } = req.body;
  console.log('recieved request for saving data', req.body);

  const query = 'INSERT INTO players (userId, saveData) VALUES (?, ?) ON DUPLICATE KEY UPDATE saveData = VALUES(saveData)';

  connection.query(query, [userId, saveData], (err, results) => {
    if (err) {
      console.error('error while saving :saluting_face:', err);
      res.status(500).send('error while saving :saluting_face:');
      return;
    }
    res.status(201).send('successfully saved data yay');
  });
});

// loading
app.get('/get-player/:userId', (req, res) => {
  const { userId } = req.params;
  console.log('recieved request for player with the userId:', userId);

  const query = 'SELECT saveData FROM players WHERE userId = ?';

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('error while getting player save :', err);
      res.status(500).send('error while getting save');
      return;
    }
    if (results.length === 0) {
      res.status(200).json({});
      console.log('This player (id :', userId,') doesnt have a save !');
      return;
    }
    res.status(200).json(results[0]);
  });
});

// starting server
app.listen(port, () => {
  console.log(`server hosted on port ${port}`);
});


