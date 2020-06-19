import * as TypeGraphQL from "type-graphql";
import { Test } from "../../../models/Test";
import { AggregateTest } from "../../outputs/AggregateTest";

@TypeGraphQL.Resolver(_of => Test)
export class AggregateTestResolver {
  @TypeGraphQL.Query(_returns => AggregateTest, {
    nullable: false,
    description: undefined
  })
  async aggregateTest(): Promise<AggregateTest> {
    return new AggregateTest();
  }
}
