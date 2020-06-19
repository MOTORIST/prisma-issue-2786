import * as TypeGraphQL from "type-graphql";
import { DeleteManyTestArgs } from "./args/DeleteManyTestArgs";
import { Test } from "../../../models/Test";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Test)
export class DeleteManyTestResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.deleteMany(args);
  }
}
