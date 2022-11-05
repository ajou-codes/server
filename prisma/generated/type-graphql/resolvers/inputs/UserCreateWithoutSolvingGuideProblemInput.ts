import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuideCreateNestedManyWithoutOwnerInput } from "../inputs/GuideCreateNestedManyWithoutOwnerInput";
import { ProjectCreateNestedManyWithoutOwnerInput } from "../inputs/ProjectCreateNestedManyWithoutOwnerInput";

@TypeGraphQL.InputType("UserCreateWithoutSolvingGuideProblemInput", {
  isAbstract: true
})
export class UserCreateWithoutSolvingGuideProblemInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  Project?: ProjectCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => GuideCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownerGuide?: GuideCreateNestedManyWithoutOwnerInput | undefined;
}
