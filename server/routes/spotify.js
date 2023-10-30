const express = require("express");
const router = express.Router();

// Get method
//

router.get("/songs", (req, res) => {
  try {
    const songs = [
      "Death of a bachelor",
      "Everlong",
      "I dont give a fu**",
      "Home",
      "Hotel California",
      "Fake palindromes",
      "Heavy",
    ];

    res.status(200).json(songs);
  } catch (error) {
    console.log(error);
  }
});

//
//Post method
//

// router.post("/songs", (req, res) => {
//   try {
//     // POST DATA TO MONGODB
//   } catch (err) {
//     console.log(err);
//   }
// });
//
module.exports = router;
