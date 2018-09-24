const express = require('express');

const router = require('./router');

// Load config
const port =process.env.PORT||8080;

const app = express();

router.apply(app);

console.log("TnuApi starting webservicer at port " + port);

app.listen(port);
