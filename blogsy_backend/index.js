
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');
app.use(cors());


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogsy')
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection failed:", err));

app.use(express.json()); // To parse JSON request bodies

// login and register
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// article related tasks
const articleRoutes = require('./routes/article');
app.use('/api/articles', articleRoutes);

app.get('/', (req, res) => {
  res.send('Blogsy Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
