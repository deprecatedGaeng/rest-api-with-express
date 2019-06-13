import express from 'express';
import mysql from 'mysql';
import dbconfig from '../config/db';

const router = express.Router();
const connection = mysql.createConnection(dbconfig);

router.post('/',(req,res,next) => {
    const {id} = req.body;
    connection.query(`DELETE FROM gaengsworld.board WHERE (id = '${id}');`,(err, rows, fields) => {
        if(!err){
            res.send('SUCCESSED')
        }else{
            res.send('CHECK REQUEST BODY')
        }
    })
})

export default router;