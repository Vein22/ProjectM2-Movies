const validateData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster, description } = req.body;
  
    if (!title || !year || !director || !duration || !genre || !rate || !poster || !description) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    next();
  };

  module.exports = validateData;