
const db = require('../dbConnection/elephantConnect');

const jobsController = {};

jobsController.getJobs = async (req, res, next) => {
    
    const queryString = 'SELECT * FROM jobs';
    
    try {
        const reply = await db.query(queryString);
        res.locals.jobs = reply.rows; 
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

module.exports = jobsController;