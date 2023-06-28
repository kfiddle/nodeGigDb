
const db = require('../dbConnection/elephantConnect');

const playerGigsController = {};

playerGigsController.getPlayers = async (req, res, next) => {
    
    const queryString = 'SELECT * FROM players';
    try {
        const reply = await db.query(queryString);
        res.locals.players = reply.rows; 
        return next();
    } catch (err) {
        console.log('There was a db error')
    }

};

module.exports = playerGigsController;