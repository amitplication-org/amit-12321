import * as graphql from "@nestjs/graphql";
import { MyEntityResolverBase } from "./base/myEntity.resolver.base";
import { MyEntity } from "./base/MyEntity";
import { MyEntityService } from "./myEntity.service";

@graphql.Resolver(() => MyEntity)
export class MyEntityResolver extends MyEntityResolverBase {
  constructor(protected readonly service: MyEntityService) {
    super(service);
  }
}
