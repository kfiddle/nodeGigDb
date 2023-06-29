
const db = require('../dbConnection/elephantConnect');

const jobsController = {};

jobsController.getJobs = async (req, res, next) => {
    
    const queryString = 'SELECT * FROM jobs';

    try {
        const reply = await db.query(queryString);

        let fullArrToReturn = []

        const jobsOnly = reply.rows;
        for (let job of jobsOnly) {
            let newRow = job;
            let query2 = `SELECT name FROM speaks JOIN jobs_speaks js ON js.speaks_id = speaks.id AND js.jobs_id = ${job.id}; `;
            const speaksArray = await db.query(query2);
            newRow = { ...newRow, speaks: speaksArray.rows};
            fullArrToReturn.push(newRow);
        }

        // res.locals.jobs = reply.rows; 
        res.locals.jobs = fullArrToReturn; 
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

module.exports = jobsController;