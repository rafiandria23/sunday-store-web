"use strict";

module.exports = (err, req, res, next) => {
  if (err) {
    switch (err.status) {
      case 404:
        res.status(404).json({ message: "Oops! It's not here!" });
        break;
    
      case 401:
        res.status(401).json({ message: "You are not authorized!" });
        break;
      
      default:
        console.log(err.message);
        res.status(500).json({ message: "Internal server error!", err });
        break;
    }
    console.log(err.message);
  }
};