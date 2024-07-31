const express = require('express');
const app = express();
const port = 1000;
app.listen(port,()=>console.log(`port active at ${port}`));
app.use(express.static('../dist'));