const createUser = `
    DROP TABLE IF EXISTS users;
    CREATE TABLE IF NOT EXISTS
    users(
        id serial PRIMARY KEY ,
        username VARCHAR UNIQUE NOT NULL,
        password VARCHAR NOT NULL,
        isAdmin BOOLEAN NOT NULL DEFAULT false,
        createdat TIMESTAMP DEFAULT NOW()
    )
`

async function migrate (db) {
    try {
        await db.query(createUser);
        return true;
    } catch (error) {
        console.log(error);
    }
}

module.exports = migrate;