/*

import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        port: process.env.MYSQL_PORT,
    }
})

export async const queryFunc = (q, values) => {
    try{
        const results = await db.query(q, values)
        await db.end()
        return results
    } catch(e){
        console.log(e)
    }
}

*/
