const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [
    {
      text: { type: String, required: true },
      commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
