import * as TypeGraphQL from "type-graphql";
import { FindManyTestArgs } from "./args/FindManyTestArgs";
import { Test } from "../../../models/Test";

@TypeGraphQL.Resolver(_of => Test)
export class FindManyTestResolver {
  @TypeGraphQL.Query(_returns => [Test], {
    nullable: false,
    description: undefined
  })
  async tests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTestArgs): Promise<Test[]> {
    return ctx.prisma.test.findMany(args);
  }
}
