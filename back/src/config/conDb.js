const mongoose = require("mongoose");
require("dotenv").config();

const conDb = async () => {
    await mongoose.connect("mongodb+srv://Vein:H4talkdbI8ph8frt@cluster0.bsam6vy.mongodb.net/MovieDB?retryWrites=true&w=majority&appName=Cluster0");
    console.log(process.env.MONGO_URI);
};

module.exports = conDb;