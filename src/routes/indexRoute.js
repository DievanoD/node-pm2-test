const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index');
});

router.get('/coins', indexController.coins);
router.get('/coin/:code', indexController.getCoin);

module.exports = router;