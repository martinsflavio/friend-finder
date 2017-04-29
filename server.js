const express = require('express');
const bodyParser = require('body-parser');


// set express app
const app = express();
const PORT = process.env.PORT || 8080;

////////middleware's/////////
app.use(bodyParser.json());

// initialize routes
app.use('/', require('./app/routing/htmlRoutes'));
app.use('/api', require('./app/routing/apiRoutes'));



// error handler
// (TODO) DEVELOPER BUILD A ERROR HANDLER AS A MIDDLEWARE
/*app.use( (err, req, res)=>{
  console.log(err.message);
  res.status(422).send({error: err.message});
});*/
////////////////////////////


// listen requests
app.listen(PORT, () => {
  console.log('Listen to Port: ' + PORT);
})
