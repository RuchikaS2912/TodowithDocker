const express = require('express');
const router = express.Router();

router.get('/gettodos', async (req, res) => {
  res.send(req);
});

module.exports = router;
