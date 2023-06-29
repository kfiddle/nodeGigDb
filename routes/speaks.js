const express = require('express');

const speaksController = require('../controllers/speaks');

const router = express.Router();

router.get('/', speaksController.getSpeaks, (req, res, next) => {
    res.status(201).json({ speaks: res.locals.speaks });
});

router.get('/by_eng/:eid', speaksController.getSpeaksByEng, (req, res, next) => {
    res.status(201).json({ speaks: res.locals.speaks });
});

module.exports = router;