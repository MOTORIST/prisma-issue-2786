import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestUpdateManyMutationInput } from "../../../inputs/TestUpdateManyMutationInput";
import { TestWhereInput } from "../../../inputs/TestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTestArgs {
  @TypeGraphQL.Field(_type => TestUpdateManyMutationInput, { nullable: false })
  data!: TestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TestWhereInput, { nullable: true })
  where?: TestWhereInput | undefined;
}
