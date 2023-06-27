
const db = require('../dbConnection/elephantConnect');

const playerGigsController = {};

playerGigsController.getPlayers = async (req, res, next) => {
    console.log('we made it here')
    
    const queryString = 'SELECT * FROM dogs';
    try {
        const answer = await db.query(queryString);
        // res.locals.puppies 
        console.log(answer.rows);
        return next();
    } catch (err) {
        console.log('didnt happen')
    }

};

module.exports = playerGigsController;