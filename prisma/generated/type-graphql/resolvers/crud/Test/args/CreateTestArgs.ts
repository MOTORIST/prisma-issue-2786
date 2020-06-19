import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestCreateInput } from "../../../inputs/TestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTestArgs {
  @TypeGraphQL.Field(_type => TestCreateInput, { nullable: false })
  data!: TestCreateInput;
}
