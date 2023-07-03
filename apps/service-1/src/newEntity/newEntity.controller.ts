import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewEntityService } from "./newEntity.service";
import { NewEntityControllerBase } from "./base/newEntity.controller.base";

@swagger.ApiTags("newEntities")
@common.Controller("newEntities")
export class NewEntityController extends NewEntityControllerBase {
  constructor(
    protected readonly service: NewEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}