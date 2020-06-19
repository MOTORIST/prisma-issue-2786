import * as TypeGraphQL from "type-graphql";
import { UpdateTestArgs } from "./args/UpdateTestArgs";
import { Test } from "../../../models/Test";

@TypeGraphQL.Resolver(_of => Test)
export class UpdateTestResolver {
  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async updateTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTestArgs): Promise<Test | undefined> {
    return ctx.prisma.test.update(args);
  }
}
