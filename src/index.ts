import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { TestCrudResolver } from "../prisma/generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [TestCrudResolver],
    // emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: (): Context => ({ prisma }),
  });

  const { url } = await server.listen(8080);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
