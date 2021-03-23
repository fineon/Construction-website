import {queryFunc} from '../../lib/mysql-init'

export default function db(req, res) {
    try{
        if(!req){
            return res.status(400).json({warning: 'must input values'})
        } else {
            const result = await queryFunc(`SELECT name FROM owners`)
            return res.json(result)
        }
    } 
    catch(e){
        console.log(e)
    }
}
