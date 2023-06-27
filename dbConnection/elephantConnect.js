const { Pool } = require('pg');

const DB_CONNECTION = 'postgres://emcspbxm:9nXpxgCTFOoqHdC8TxBo2k-0q49sN1oS@mel.db.elephantsql.com/emcspbxm';

const pool = new Pool({
    connectionString: DB_CONNECTION
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}