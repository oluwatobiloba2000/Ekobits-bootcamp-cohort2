const migrate = require('./migration');
const db = require('../db/index');


(async function(){
    try {
        await migrate(db)
        console.log('database migrated successfully');
        process.exit();
    } catch (error) {
        console.log(error);
    }
})()