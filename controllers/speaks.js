
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

speaksController.getSpeaksByEng = async (req, res, next) => {
    const eid = req.params.eid;

    const queryString = `SELECT s.name AS name FROM speaks s JOIN engineers_speaks es ON es.speak_id = s.id JOIN engineers e ON es.engineer_id = e._id WHERE e._id = ${eid};`;

    try {
        const reply = await db.query(queryString);
        res.locals.speaks = reply.rows;
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

// speaksController.createSpeak = async (req, res, next) => {
//     const { name } = req.body;
//     console.log(name)

//     const queryString = `INSERT INTO speaks values(${id}, ${title}, ${company}, ${salary})`;
//     try { 
//         let response = await db.query(queryString);
//         console.log(response)
//     } catch (err) {
//         console.log('db issue dude')
//     }
// }

module.exports = speaksController;