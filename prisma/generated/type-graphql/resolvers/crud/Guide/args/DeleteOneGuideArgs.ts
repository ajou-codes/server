import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuideWhereUniqueInput } from "../../../inputs/GuideWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGuideArgs {
  @TypeGraphQL.Field(_type => GuideWhereUniqueInput, {
    nullable: false
  })
  where!: GuideWhereUniqueInput;
}
