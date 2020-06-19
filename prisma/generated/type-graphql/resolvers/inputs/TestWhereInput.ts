import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { NullableDateTimeFilter } from "../inputs/NullableDateTimeFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class TestWhereInput {
  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFilter, {
    nullable: true,
    description: undefined
  })
  date?: NullableDateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => [TestWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TestWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TestWhereInput[] | undefined;
}
