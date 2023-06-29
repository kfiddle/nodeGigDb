const express = require('express');

const jobsController = require('../controllers/jobs');

const router = express.Router();

router.get('/', jobsController.getJobs, (req, res, next) => {
    res.status(201).json({ jobs: res.locals.jobs });
});

router.post('/', jobsController.createJob, (req, res, next) => {
    console.log('post this ')
    res.status(201).json({ job: res.locals.job })
})

module.exports = router;