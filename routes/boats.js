//Configurer mon fichier de route et créer la connection entre ce fichier et BDD
const express = require("express")  
const mysql = require("../config/db")

const router = express.Router() //On veut juste express router

router.get('/', (req, res) => {
const sql = "SELECT * FROM boats"//Faire une requette qui permet de récupérer les informations dans la route boats
mysql.query(sql, (err, result) => {
if (err) {
    res.status(500).send("Error retrieving data from database")
}else{
    console.table(result)
    res.status(200).json(result)//Un réponse en Json
        }
    })
}) 
//Route qui va récupérer des informations.
//'/' c'est le chemin d'accès pour arriver à la route boats
//req, res :  Récupérer toutes les informations qui sont en BDD

router.post('/', (req, res) => {
    const sql = `INSERT INTO boats (id, boatname) VALUES (?, ?)`
console.log(req.body)
const values = [req.body.id, req.body.boatname]
    mysql.query(sql, values, (err, result) => {
    if (err) {
        res.status(500).send("Error retrieving data from database")
    } else {
        console.table(result)
        res.status(200).json(result)
            }
        })
    }) 

module.exports = router
