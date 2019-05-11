const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/psp-web'));

const apiProxy = proxy('/api', { target: 'https://sandbox-reporting.rpdpymnt.com',  changeOrigin: true, secure: true  });
app.use('/api', apiProxy);


// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/psp-web/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
