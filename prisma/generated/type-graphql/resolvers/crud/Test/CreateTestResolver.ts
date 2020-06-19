import * as TypeGraphQL from "type-graphql";
import { CreateTestArgs } from "./args/CreateTestArgs";
import { Test } from "../../../models/Test";

@TypeGraphQL.Resolver(_of => Test)
export class CreateTestResolver {
  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async createTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTestArgs): Promise<Test> {
    return ctx.prisma.test.create(args);
  }
}
