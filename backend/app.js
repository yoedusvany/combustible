import express    from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import cors       from "cors";

const { ApolloServer, gql } = require('apollo-server');
import schema     from './graphql/schemas/index';
import resolvers  from './graphql/resolvers/index';


const app = express();
const url = 'http://localhost:4000/';
const db = "mongodb://localhost:27017/combustible";


app.use(cors());


// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});