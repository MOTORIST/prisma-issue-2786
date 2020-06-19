import * as TypeGraphQL from "type-graphql";
import { FindOneTestArgs } from "./args/FindOneTestArgs";
import { Test } from "../../../models/Test";

@TypeGraphQL.Resolver(_of => Test)
export class FindOneTestResolver {
  @TypeGraphQL.Query(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async test(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTestArgs): Promise<Test | undefined> {
    return ctx.prisma.test.findOne(args);
  }
}
