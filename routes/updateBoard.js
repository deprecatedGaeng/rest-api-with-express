import express from 'express';
import mysql from 'mysql';
import dbconfig from '../config/db';

const router = express.Router();
const connection = mysql.createConnection(dbconfig);

router.post('/',(req,res,next) => {
    const {id, title, contents} = req.body;
    connection.query(`UPDATE gaengsworld.board SET title = '${title}', contents = '${contents}' WHERE (id = '${id}');`,(err, rows, fields) => {
        if(!err){
            res.send('SUCCESSED')
        }else{
            res.send('CHECK REQUEST BODY')
        }
    })
})

export default router;