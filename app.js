const express = require("express") // Je demande à avoir express dans mon projet
const cors = require("cors") // Cors sert à gérer les droits d'accès de ce localhost
const morgan = require("morgan") 
const connection = require("./config/db")
const routes = require("./routes/index")

const app = express() // Je donnes toute la puissance de express à mon app

connection.connect((err) => {
    if(err) {
        console.error("error connecting: " + err.stack)
    } else {
        console.log("connected")
    }
})

// Middleware : C'est une fonctionnalité qui se lance avant les routes.
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json()) //Elle sert quand on envoie un post. Quand on envoie des data vers le serveur. 
//Quand on recoit des data qui viennent du front pour d'un post man vers la base de données, qu'est ce qui se passe ? 
//On envoit un petit sac à dos dans le dos de la requette avec le post man et ll faut vérifier ce qu'il y dans le sac à dos. 
app.use(express.urlencoded({ entented: true})) //C'est pour créer l'objet (un sac à dos qui est bien organisé)

app.use("/boats", routes.boats) //Quand tu vois le fichier '/boats' tu vas aller dans l'index.js chercher le fichier 'boats'pour pouvoir charger des trucs.

//Routes
app.get("/", (req, res) => { // 1ère route pour qu'on puisse aller dessus. 
res.status(200).send("Je suis dans le /") // On lui envoit le statut 200 et un message. 
})


app.listen(4242, console.log(`http://localhost:4242`)) // Je crée un serveur fonctionnel qui écoute le port 4242


// Dans le terminal, taper node app.js pour voir ou il en est