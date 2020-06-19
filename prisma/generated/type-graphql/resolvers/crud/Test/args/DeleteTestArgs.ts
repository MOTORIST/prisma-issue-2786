import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTestArgs {
  @TypeGraphQL.Field(_type => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;
}
