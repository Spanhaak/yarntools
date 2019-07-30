// Set some constants

const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

// Setup routes to destination
app.get('/', (req, res) => res.json({ msg: 'Hello Yarntools' }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, () => console.log(`Server started on ${PORT}`));

