const friendsDB = require('../data/friends.js');




module.exports = (app) => {

  app.get('/api/friends', (req,res) => {
    res.json(friendsDB);
  })

  app.post('/api/friends', (req,res) => {
    let newFriend = req.body;
    friendsDB.push(newFriend);
  })

}



