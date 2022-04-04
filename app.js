const redis = require("redis");
const express = require("express");
const sequelize = require('configdb');

let result = new Map();

function addToCache(titleFilm, dataFilm) {

    result.set(titleFilm, dataFilm);
    setTimeout( () => result.delete(titleFilm), 15000);
    client.set(titleFilm, JSON.stringify(dataFilm));
    client.expire(titleFilm, 30);

}

// make model table
const Film = require("model_films")(sequelize);

// make server
const app = express();

// connect redis
const client = redis.createClient();
client.on('error', (err) => {
    console.log(err)
});
client.connect();

app.get(/film/, (req, res) => {

    // key to store results in Redis store
    let getUrl = req.originalUrl.replace( "/film/", '');
    // name of the film
    let titleFilm = getUrl.replace('_', ' ');

    if (!result.has(titleFilm)) {

        (async () => {
            let checkInRedis = await client.get(titleFilm);

            if (checkInRedis != null) {
                console.log("data from redis");
                return res.json({ source: 'redis', data: JSON.parse(checkInRedis) });
            } else {
                Film.findOne({ where: {title: titleFilm} })
                            .then( film => {

                                if (!film) {
                                    return res.sendStatus(404);
                                } else {
                                    addToCache(titleFilm, film.dataValues);

                                    console.log("data from database");
                                    return res.json({ source: 'db', data: film.dataValues });
                                }
                            })
                            .catch( err => {
                                console.log(err);
                                return res.json(err.toString())
                            });
            }

        })();

    } else {
        console.log("data from node-cache");
        return res.json({ source: 'node-cache', data: result.get(titleFilm) });
    }

});

app.listen(3000, () => {
    console.log('Server listening on port: ', 3000)
});