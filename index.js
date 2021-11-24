const express = require('express');
const cors = require('cors'); // cross origin requests


const authRoutes = require('./routes/auth.js')
// instance of express application
const app = express();
// specify port for back end
const PORT = process.env.PORT || 5000;

// for environment variables
require('dotenv').config(); // allows us to call environment variables inside node applications

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // can pass JSON payloads from front end to back end
app.use(express.urlencoded());

// ROUTES
app.get('/', (req, res) => (
  res.send('Hello, World!')
));

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
