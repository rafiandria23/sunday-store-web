"use strict";

module.exports = (err, req, res, next) => {
  if (err.name == "SequelizeValidationError") {
    const validationErrors = [];
    err.errors.forEach(error => {
      validationErrors.push(error.message);
    });
    res.status(400).json({message: validationErrors});
  }
  else {
    switch (err.status) {
      case 400:
        res.status(400).json({ message: err.message });
        break;

      case 404:
        res.status(404).json({ message: "Oops! It's not here!" });
        break;
    
      case 401:
        res.status(401).json({ message: "You are not authorized!" });
        break;
      
      default:
        res.status(500).json({ message: "Internal server error!", error: err.message });
        break;
    }
  }
};