//HWU8p3aUgWRObtfL
//mongodb+srv://shallabhrajput9:HWU8p3aUgWRObtfL@cluster0.6jahcjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const portfolioData = require("./models/portfolio")


const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://shallabhrajput9:HWU8p3aUgWRObtfL@cluster0.6jahcjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(cors());
app.use(bodyparser.json());

app.post("/api/portfolio", (req, res) => {
    const newPortfolio = new portfolioData({
      name: req.body.name,
      title: req.body.title,
      summary: req.body.summary,
      skills: req.body.skills,
      projects: req.body.projects,
      education: req.body.education,
    });
        newPortfolio.save()
        .then(() => {
            res.json({ message: "Portfolio created successfully!" });
          })
          .catch(err => {
            console.error(err);
            res.status(500).send("Error creating portfolio entry");
          });
    })

    app.get("/api/portfolio", (req, res) => {
        portfolioData.find({})
          .then(data => {
            if (data.length > 0) {
              res.json(data[0]); // Assuming you only have one portfolio entry
            } else {
              res.json({}); // Return an empty object if no data found
            }
          })
          .catch(err => {
            console.error(err);
            res.status(500).send("Error retrieving portfolio data");
          });
      });

app.listen(port, ()=>{
    console.log(`server is on port ${port}`)
})