const express = require('express');
const router = express.Router();
const friendsDB = require('../data/friends');



// (TODO) DEVELOPER SEND ERRORS TO CLIENT SIDE IN ALL ROUTES

// get a list of friends from db
router.get('/friends', (req, res) => {

 res.send({friendsDB});

});


// add friend to db
router.post('/friends', (req, res) => {
  friendsDB.push(req.body);
  console.log(friendsDB);
});



module.exports = router;

