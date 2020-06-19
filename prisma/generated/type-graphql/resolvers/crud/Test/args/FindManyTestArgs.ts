import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TestOrderByInput } from "../../../inputs/TestOrderByInput";
import { TestWhereInput } from "../../../inputs/TestWhereInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyTestArgs {
  @TypeGraphQL.Field(_type => TestWhereInput, { nullable: true })
  where?: TestWhereInput | undefined;

  @TypeGraphQL.Field(_type => TestOrderByInput, { nullable: true })
  orderBy?: TestOrderByInput | undefined;

  @TypeGraphQL.Field(_type => TestWhereUniqueInput, { nullable: true })
  cursor?: TestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
