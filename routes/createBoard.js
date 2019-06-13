import express from 'express';
import mysql from 'mysql';
import dbconfig from '../config/db';

const router = express.Router();
const connection = mysql.createConnection(dbconfig);

router.post('/',(req,res,next) => {
    const {title, date, author, contents} = req.body;
    connection.query(`INSERT INTO gaengsworld.board (title, date, author, contents) VALUES ('${title}', '${date}', '${author}', '${contents}');`,(err, rows, fields) => {
        if(!err){
            res.send('SUCCESSED')
        }else{
            res.send('CHECK REQUEST BODY')
        }
    })
})

export default router;