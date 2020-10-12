let express = require('express');
let app = express();

app.use(express.static('content'));
app.listen('8080');