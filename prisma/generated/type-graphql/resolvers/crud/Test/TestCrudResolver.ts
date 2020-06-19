import * as TypeGraphQL from "type-graphql";
import { CreateTestArgs } from "./args/CreateTestArgs";
import { DeleteManyTestArgs } from "./args/DeleteManyTestArgs";
import { DeleteTestArgs } from "./args/DeleteTestArgs";
import { FindManyTestArgs } from "./args/FindManyTestArgs";
import { FindOneTestArgs } from "./args/FindOneTestArgs";
import { UpdateManyTestArgs } from "./args/UpdateManyTestArgs";
import { UpdateTestArgs } from "./args/UpdateTestArgs";
import { UpsertTestArgs } from "./args/UpsertTestArgs";
import { Test } from "../../../models/Test";
import { AggregateTest } from "../../outputs/AggregateTest";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Test)
export class TestCrudResolver {
  @TypeGraphQL.Query(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async test(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTestArgs): Promise<Test | undefined> {
    return ctx.prisma.test.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Test], {
    nullable: false,
    description: undefined
  })
  async tests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTestArgs): Promise<Test[]> {
    return ctx.prisma.test.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async createTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTestArgs): Promise<Test> {
    return ctx.prisma.test.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async deleteTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTestArgs): Promise<Test | undefined> {
    return ctx.prisma.test.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async updateTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTestArgs): Promise<Test | undefined> {
    return ctx.prisma.test.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async upsertTest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTestArgs): Promise<Test> {
    return ctx.prisma.test.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTest, {
    nullable: false,
    description: undefined
  })
  async aggregateTest(): Promise<AggregateTest> {
    return new AggregateTest();
  }
}
