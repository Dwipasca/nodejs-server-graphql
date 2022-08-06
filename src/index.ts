const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./Schema");

const { createConnection } = require("typeorm");

const { Users } = require("./Entities/Users");

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "CRUD-GRAPHQL",
    username: "root",
    password: "password",
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const app = express();
  const PORT = 3001;
  app.use(cors());
  app.use(express.json());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(PORT, () => {
    console.log(`Server running at PORT PORT ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
