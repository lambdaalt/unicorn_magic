const router = require('express').Router()

router.get("*", (req, res) => {
    res.status(401).json({ message: "Your Treading Dangrous Waters" });
  });
  
  router.post("*", (req, res) => {
    res.status(401).json({ message: "Blood, is in the water" });
  });
  
  router.put("*", (req, res) => {
    res.status(401).json({ message: "The sharks are circling" });
  });
  
  router.delete("*", (req, res) => {
    res.status(401).json({ message: "May the wrath of the kraken tear you down" },``);
  });

  module.exports=router