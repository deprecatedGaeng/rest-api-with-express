import express from 'express';
import mysql from 'mysql';
import dbconfig from '../config/db';

const router = express.Router();
const connection = mysql.createConnection(dbconfig);

router.get('/',(req,res,next) => {
    let queryString = 'SELECT * from board';
    const {id} = req.query;
    if(id){
        if(!isNaN(Number(id))){
            queryString = `SELECT * FROM gaengsworld.board WHERE id='${id}';`
        }  
    }else{
        console.log('id없어')
    }

    connection.query(queryString,(err, rows, fields) => {
        if(!err){
            res.send(rows)
        }else{
            throw err;
        }
    })
})

export default router;