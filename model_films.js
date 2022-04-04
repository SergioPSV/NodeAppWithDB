//import { Sequelize } from "sequelize";
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const Film = sequelize.define("film", {
        film_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        release_year: {
            type: Sequelize.INTEGER
        },
        language_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rental_duration: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rental_rate: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        length: {
            type: Sequelize.INTEGER
        },
        replacement_cost: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rating: {
            type: Sequelize.STRING
        },
        last_update: {
            type: Sequelize.DATE,
            allowNull: false
        },
        special_features: {
            type: Sequelize.JSON
        },
        fulltext: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Film;
};