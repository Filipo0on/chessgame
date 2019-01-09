const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors')
const schema = require('./schema'); 

const app = express()

app.use('/graphql', cors(), expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log(`graphiQL playground running at port 4000 http://localhost:4000/graphql`)
})