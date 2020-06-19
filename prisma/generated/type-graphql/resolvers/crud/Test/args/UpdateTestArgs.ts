import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestUpdateInput } from "../../../inputs/TestUpdateInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTestArgs {
  @TypeGraphQL.Field(_type => TestUpdateInput, { nullable: false })
  data!: TestUpdateInput;

  @TypeGraphQL.Field(_type => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;
}
