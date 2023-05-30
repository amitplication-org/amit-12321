import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyEntityService } from "./myEntity.service";
import { MyEntityControllerBase } from "./base/myEntity.controller.base";

@swagger.ApiTags("myEntities")
@common.Controller("myEntities")
export class MyEntityController extends MyEntityControllerBase {
  constructor(
    protected readonly service: MyEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
