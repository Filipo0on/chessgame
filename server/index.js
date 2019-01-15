const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors')
const schema = require('./schema'); 
const session = require('express-session');
const parseurl = require('parseurl');

// Start server
/*
    1st terminal: json-server -p 1337 --watch db.json
    2nd terminal: npm run dev
*/ 

const app = express();
// lätt till session efter cors.
app.use(session({
    secret: 'moms meatballs',
    resave: false,
    saveUninitialized: true
}));

app.use('/graphql', cors(), expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`graphiQL playground running at port 4000 http://localhost:4000/graphql`, `express-server example shows result on http://localhost:4000/test`)
})