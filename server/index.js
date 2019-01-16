const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors')
const schema = require('./schema'); 
const session = require('express-session');

const app = express();
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