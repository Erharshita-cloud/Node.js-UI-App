const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let messages = [];

app.get('/', (req, res) => {
    res.render('index', { messages });
});

app.post('/submit', (req, res) => {
    const message = req.body.message;
    if (message.trim() !== "") {
        messages.push(message);
    }
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

