const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer'); // For handling file uploads
const path = require('path');

// Import your routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images as static files

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('MongoDB Connection Error:', error));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Blog CRUD Routes

// Create a Blog
app.post('/api/blogs', upload.single('photo'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const photoPath = req.file ? `/uploads/${req.file.filename}` : '';
    const newBlog = new Blog({ title, description, photo: photoPath });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create blog', error: error.message });
  }
});

// Read all Blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs', error: error.message });
  }
});

// Update a Blog
app.put('/api/blogs/:id', upload.single('photo'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const photoPath = req.file ? `/uploads/${req.file.filename}` : req.body.photo;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, photo: photoPath },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update blog', error: error.message });
  }
});

// Delete a Blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete blog', error: error.message });
  }
});
