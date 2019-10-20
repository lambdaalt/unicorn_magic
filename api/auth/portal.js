const router = require("express").Router();
const dbModel = require('./portalModel');



//LOGIN
router.post("/login", (req, res) => {
  const u = req.body;
  if (u && u.username && u.password) {
      dbModel.findByUserName(u)
      .then(u=>{
          res.status(200).json({messag:"success",...u})
      })
  } else {
    res.json({ error: "Username & Password Required" });
  }
});

router.post("/register", (req, res) => {
  const u = req.body;
  if (u && u.username && u.password) {
    dbModel.addUser(u)
    .then(u=>{
        res.status(200).json({messag:"success",...u})
    }).catch(err =>res.status(401).json(err)
    )
  } else {
    res.json({ error: "Username & Password Required" });
  }
});

module.exports = router;
