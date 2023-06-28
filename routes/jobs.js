const express = require('express');

const jobsController = require('../controllers/jobs');

const router = express.Router();

router.get('/', jobsController.getJobs, (req, res, next) => {
    res.status(201).json({ jobs: res.locals.jobs });
});

module.exports = router;