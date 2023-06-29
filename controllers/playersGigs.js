
const db = require('../dbConnection/elephantConnect');

const playerGigsController = {};

playerGigsController.getPlayers = async (req, res, next) => {
    
    const queryString = 'SELECT * FROM engineers ORDER BY name';
    try {
        const reply = await db.query(queryString);
        res.locals.engineers = reply.rows; 
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

playerGigsController.getPlayersBySpeak = async (req, res, next) => {
    const sid = req.params.sid;

    const queryString = `SELECT e.name AS name, e._id AS id FROM engineers e JOIN engineers_speaks es ON e._id = es.engineer_id JOIN speaks ON speaks.id = es.speak_id AND es.speak_id = ${sid};`;
    try {
        const reply = await db.query(queryString);
        res.locals.engineers = reply.rows; 
        return next();
    } catch (err) {
        console.log('There was a db error')
    }
};

module.exports = playerGigsController;