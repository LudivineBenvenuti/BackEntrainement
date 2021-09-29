//Configuration pour se connecter à la base de données
require("dotenv").config()
const mysql = require("mysql2") // S'il n'y à pas de ./ devant mysql c'est que ca vient de node_module. Sinon c'est que c'est moi qui ai crée le fichier. 

const connection = mysql.createConnection({ //On lui demande de créer une connexion entre le serveurs back et la base de données. 
host: process.env.DB_HOST, //pour se connecter à la base de donner il faut l'identifiant et le mot de passe. 
port: process.env.DB_PORT, //ça sert à récupérer ce qu'on a stocker dans le fichier .env et pour faire la passerelle (process.env)
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
}) //Je viens de créer ma connextion, la passerelle entre les deux. 

module.exports = connection //Pour exporter la connection. 