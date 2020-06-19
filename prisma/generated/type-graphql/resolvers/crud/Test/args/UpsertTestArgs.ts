import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestCreateInput } from "../../../inputs/TestCreateInput";
import { TestUpdateInput } from "../../../inputs/TestUpdateInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTestArgs {
  @TypeGraphQL.Field(_type => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;

  @TypeGraphQL.Field(_type => TestCreateInput, { nullable: false })
  create!: TestCreateInput;

  @TypeGraphQL.Field(_type => TestUpdateInput, { nullable: false })
  update!: TestUpdateInput;
}
