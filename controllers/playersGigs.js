
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

module.exports = playerGigsController;