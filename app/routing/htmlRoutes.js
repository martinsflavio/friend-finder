const express = require('express');
const router = express.Router();
const path = require('path');


// get survey.html
router.get('/survey', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// get index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});


module.exports = router;






