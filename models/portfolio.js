const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    skills:[
        {type: String,
        required: true,}
    ],
    projects: [
        {
          title: { type: String, required: true },
          description: { type: String },
          link: { type: String },
          technologies: [String],
        },
      ],
      education: [
        {
          institution: { type: String, required: true },
          degree: { type: String },
          duration: { type: String },
        },
      ]
});


module.exports = mongoose.model('Portfolio', portfolioSchema);