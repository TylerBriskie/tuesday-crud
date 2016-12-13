var knexObject = require('./knexfile');
var knexEnvironmentObject = knexObject[process.env.NODE_ENV || "development"];
module.exports = require("knex")(knexEnvironmentObject);
