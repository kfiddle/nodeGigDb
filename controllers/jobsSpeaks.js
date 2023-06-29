
const db = require('../dbConnection/elephantConnect');

const jobsSpeaksController = {};

jobsSpeaksController.getSpeaksOnJob = async (req, res, next) => {
    const jobId = req.params.jid;
    
    const queryString = `SELECT * FROM speaks JOIN jobs_speaks js ON js.speaks_id = speaks.id AND js.jobs_id = ${jobId}; `;
    // http://localhost:3000/jobs_speaks/${clickedJob.id}`
    
    try {
        const reply = await db.query(queryString);
        res.locals.speaks = reply.rows; 
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

module.exports = jobsSpeaksController;