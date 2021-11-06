const { response } = require("express");
const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const https = require("https");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname );

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

activeId = 1;

//obtener todo lo de la api
app.get('/', (req, res) => {
    const aux = [];
    const url = "https://www.superheroapi.com/api.php/1810976175770019/" + activeId;
    https.get(url, (response) => {
        response.on("data", (data) => {
            aux.push(data);
        });
        response.on("end", () => {
            const heroDataAux = Buffer.concat(aux);
            const datab = JSON.parse(heroDataAux);

            //todas las variables
            var id = datab.id;
            idActive = id;
            var imageurl = datab.image.url;
            var nameHero = datab.name;
            var fullname = datab.biography["full-name"];
            var intelligence = datab.powerstats.intelligence;
            var strength = datab.powerstats.strength;
            var speed = datab.powerstats.speed;
            var durability = datab.powerstats.durability;
            var power = datab.powerstats.power;
            var combat = datab.powerstats.combat;
            var placeOfBirth = datab.biography["place-of-birth"];
            //small biography
            var aliases = datab.biography.aliases;
            var gender = datab.appearance.gender;
            var race = datab.appearance.race;
            var height = datab.appearance.height[0];
            var weight = datab.appearance.weight[0];
            var eye = datab.appearance["eye-color"];
            var hair = datab.appearance["hair-color"];
            var affiliation = datab.appearance["group-affiliation"];

            res.render("index.html", {
                idHero: idActive,
                imageurl: imageurl,
                nameHero: nameHero,
                fullname: fullname,
                intelligence: intelligence,
                strength: strength,
                speed: speed,
                durability: durability,
                power: power,
                combat: combat,
                placeOfBirth: placeOfBirth,
                aliases: aliases,
                gender: gender,
                race: race,
                height: height,
                weight: weight,
                eye: eye,
                hair: hair,
                affiliation: affiliation
            });
        })
    });
});

//Buscar

//boton next
app.post('/next', (req, res) => {
    const aux = [];//agarrar informacion por chunks
    if (activeId == 731){
        activeId = 1;
    }
    else{
        activeId++;
    }
    const url = "https://www.superheroapi.com/api.php/1810976175770019/" + activeId;
    https.get(url, (response) => {
        response.on("data", (data) => {
            aux.push(data);
        });
        response.on("end", () => {
            const heroDataAux = Buffer.concat(aux);
            const datab = JSON.parse(heroDataAux);

            //todas las variables
            var id = datab.id;
            idActive = id;
            var imageurl = datab.image.url;
            var nameHero = datab.name;
            var fullname = datab.biography["full-name"];
            var intelligence = datab.powerstats.intelligence;
            var strength = datab.powerstats.strength;
            var speed = datab.powerstats.speed;
            var durability = datab.powerstats.durability;
            var power = datab.powerstats.power;
            var combat = datab.powerstats.combat;
            var placeOfBirth = datab.biography["place-of-birth"];
            //small biography

            var aliases = datab.biography.aliases;
            var gender = datab.appearance.gender;
            var race = datab.appearance.race;
            var height = datab.appearance.height[0];
            var weight = datab.appearance.weight[0];
            var eye = datab.appearance["eye-color"];
            var hair = datab.appearance["hair-color"];
            var affiliation = datab.appearance["group-affiliation"];


            res.render("index.html", {
                idHero: idActive,
                imageurl: imageurl,
                nameHero: nameHero,
                fullname: fullname,
                intelligence: intelligence,
                strength: strength,
                speed: speed,
                durability: durability,
                power: power,
                combat: combat,
                placeOfBirth: placeOfBirth,
                aliases: aliases,
                gender: gender,
                race: race,
                height: height,
                weight: weight,
                eye: eye,
                hair: hair,
                affiliation: affiliation
            });
        })
    });
});

app.post('/previus', (req, res) => {
    const aux = [];
    if (activeId == 1) {
        activeId = 731;
    }
    else {
        activeId--;
    }
    const url = "https://www.superheroapi.com/api.php/1810976175770019/" + activeId;
    https.get(url, (response) => {
        response.on("data", (data) => {
            aux.push(data);
        });
        response.on("end", () => {
            const heroDataAux = Buffer.concat(aux);
            const datab = JSON.parse(heroDataAux);

            //todas las variables
            var id = datab.id;
            idActive = id;
            var imageurl = datab.image.url;
            var nameHero = datab.name;
            var fullname = datab.biography["full-name"];
            var intelligence = datab.powerstats.intelligence;
            var strength = datab.powerstats.strength;
            var speed = datab.powerstats.speed;
            var durability = datab.powerstats.durability;
            var power = datab.powerstats.power;
            var combat = datab.powerstats.combat;
            var placeOfBirth = datab.biography["place-of-birth"];
            //small biography

            var aliases = datab.biography.aliases;
            var gender = datab.appearance.gender;
            var race = datab.appearance.race;
            var height = datab.appearance.height[0];
            var weight = datab.appearance.weight[0];
            var eye = datab.appearance["eye-color"];
            var hair = datab.appearance["hair-color"];
            var affiliation = datab.appearance["group-affiliation"];

            res.render("index.html", {
                idHero: idActive,
                imageurl: imageurl,
                nameHero: nameHero,
                fullname: fullname,
                intelligence: intelligence,
                strength: strength,
                speed: speed,
                durability: durability,
                power: power,
                combat: combat,
                placeOfBirth: placeOfBirth,
                aliases: aliases,
                gender: gender,
                race: race,
                height: height,
                weight: weight,
                eye: eye,
                hair: hair,
                affiliation: affiliation
            });
        })
    });
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
})