
const db = require('../dbConnection/elephantConnect');

const speaksController = {};

speaksController.getSpeaks = async (req, res, next) => {

    const queryString = 'SELECT * FROM speaks';

    try {
        const reply = await db.query(queryString);
        res.locals.speaks = reply.rows;
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

speaksController.getEngineersOfSpeak = async (req, res, next) => {

    const queryString = 'SELECT * FROM speaks';

    try {
        const reply = await db.query(queryString);
        res.locals.speaks = reply.rows;
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

module.exports = speaksController;