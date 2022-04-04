const Sequelize = require("sequelize");

const sequelize = new Sequelize("beaxlnlv", "beaxlnlv", "7sBb9OmyxYTEG0R4Il06C6vaz0Zcy_qm", {
    dialect: "postgres",
    host: "ruby.db.elephantsql.com",
    logging: false,
    define: {
        timestamps: false
    }
});

module.exports = sequelize;