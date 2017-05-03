const express = require('express');
const router = express.Router();
const friendsDB = require('../data/friends');

// get a list of friends from db
router.get('/friends', (req, res) => {

 res.send({friendsDB});

});


// add friend to db
router.post('/friends', (req, res) => {
  let friend = req.body;
  let listOfFriends = friendsDB;

  res.send(findBestFriend(friend, listOfFriends));
  friendsDB.push(friend);
});

// find closest Friend
const findBestFriend = (newFriend, friendsList) => {
 // let newFriend = req.body;
  let closestFriend = {};
  let closestScore;

  // run true all friends
  for(let i = 0; i < friendsList.length; i++){
    let friend = friendsList[i];
    let totalDif = 0;

    //compare the scores between newFriend and friends array
    for (let j = 0; j < friend.scores.length; j++) {
      totalDif += Math.abs(newFriend.scores[j] - friend.scores[j]);
    }

    if(i === 0) {
      closestScore = totalDif;
    } else {
      if (closestScore >= totalDif) {
        closestScore = totalDif;
        closestFriend = friend;
      }
    }
  }
  console.log(closestFriend);
  console.log(closestScore);

  return closestFriend;
};

module.exports = router;

