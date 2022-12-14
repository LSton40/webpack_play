const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/', (req, res) => {
    res.send('server works');
});

app.listen(PORT, () => console.log('Server running on %s', PORT));