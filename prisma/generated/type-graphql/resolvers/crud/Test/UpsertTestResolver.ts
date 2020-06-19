import * as TypeGraphQL from "type-graphql";
import { UpsertTestArgs } from "./args/UpsertTestArgs";
import { Test } from "../../../models/Test";

@TypeGraphQL.Resolver(_of => Test)
export class UpsertTestResolver {
  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async upsertTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTestArgs): Promise<Test> {
    return ctx.prisma.test.upsert(args);
  }
}
