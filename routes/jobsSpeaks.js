const express = require('express');

const jobsSpeaksController = require('../controllers/jobsSpeaks')

const router = express.Router();

router.get('/:jid', jobsSpeaksController.getSpeaksOnJob, (req, res, next) => {
    res.status(201).json({ speaks: res.locals.speaks });
});

module.exports = router;