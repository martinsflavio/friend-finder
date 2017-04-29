const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routing/apiRoutes');
const htmlpath = require('./app/routing/htmlRoutes');
// set express app
const app = express();
const PORT = process.env.PORT || 8080;

////////middleware's/////////
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/public'));
app.use(htmlpath);
app.use('/api', routes);



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
