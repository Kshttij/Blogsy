const Article = require('../models/Article');

// Create
exports.createArticle = async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const saved = await newArticle.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Read all
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('author', 'username email');
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Read one
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate('author', 'username');
    if (!article) return res.status(404).json('Article not found');
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update
exports.updateArticle = async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Delete
exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json("Article deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
