import * as TypeGraphQL from "type-graphql";
import { DeleteTestArgs } from "./args/DeleteTestArgs";
import { Test } from "../../../models/Test";

@TypeGraphQL.Resolver(_of => Test)
export class DeleteTestResolver {
  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async deleteTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTestArgs): Promise<Test | undefined> {
    return ctx.prisma.test.delete(args);
  }
}
