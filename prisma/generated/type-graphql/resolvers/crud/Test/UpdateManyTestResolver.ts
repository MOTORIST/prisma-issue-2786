import * as TypeGraphQL from "type-graphql";
import { UpdateManyTestArgs } from "./args/UpdateManyTestArgs";
import { Test } from "../../../models/Test";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Test)
export class UpdateManyTestResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.updateMany(args);
  }
}
