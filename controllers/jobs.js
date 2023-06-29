
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
            let query2 = `SELECT * FROM speaks JOIN jobs_speaks js ON js.speaks_id = speaks.id AND js.jobs_id = ${job.id}; `;
            const speaksArray = await db.query(query2);
            newRow = { ...newRow, speaks: speaksArray.rows };
            fullArrToReturn.push(newRow);
        }

        res.locals.jobs = fullArrToReturn;
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

jobsController.createJob = async (req, res, next) => {
    const { id, title, company, salary } = req.body;
    console.log(id, title, company, salary)

    console.log(typeof salary);

    const queryString = `INSERT INTO jobs values(${id}:: DECIMAL, ${title}, ${company}, ${salary}::DECIMAL)`;
    try { 
        let response = await db.query(queryString);
        console.log(response)
    } catch (err) {
        console.log('db issue dude')
    }
}

module.exports = jobsController;