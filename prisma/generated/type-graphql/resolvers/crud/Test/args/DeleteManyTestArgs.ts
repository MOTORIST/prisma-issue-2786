import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestWhereInput } from "../../../inputs/TestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTestArgs {
  @TypeGraphQL.Field(_type => TestWhereInput, { nullable: true })
  where?: TestWhereInput | undefined;
}
