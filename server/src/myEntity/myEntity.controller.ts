import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MyEntityService } from "./myEntity.service";
import { MyEntityControllerBase } from "./base/myEntity.controller.base";

@swagger.ApiTags("myEntities")
@common.Controller("myEntities")
export class MyEntityController extends MyEntityControllerBase {
  constructor(protected readonly service: MyEntityService) {
    super(service);
  }
}
