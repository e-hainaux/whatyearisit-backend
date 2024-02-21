var express = require('express');
var router = express.Router();

/* GET current year. */
router.get('/', function(req, res, next) {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    res.json({year: currentYear});
});




module.exports = router;