const express = require('express');
const router = express.Router();
const mysqlDB = require('../data/network_db');



// (TODO) DEVELOPER SEND ERRORS TO CLIENT SIDE IN ALL ROUTES

// get a list of friends from db
router.get('/friends', (req, res) => {

  mysqlDB.query('SELECT * FROM friends', (err, data) => {
    if (err) throw next;
    res.send({
      type: 'GET',
      friends: data
    })
  })

});


// add friend to db
router.post('/friends', (req, res) => {

  // (TODO) DEVELOPER ADD LOGIC TO PREVENT DUPLICATE

  mysqlDB.query('INSERT INTO friends SET ?',[req.body], (err) => {
    if (err) throw err;
    mysqlDB.query('SELECT * FROM friends WHERE ?', [{name: req.body.name}], (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  })

});



module.exports = router;

