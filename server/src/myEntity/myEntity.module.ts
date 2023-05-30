import { Module } from "@nestjs/common";
import { MyEntityModuleBase } from "./base/myEntity.module.base";
import { MyEntityService } from "./myEntity.service";
import { MyEntityController } from "./myEntity.controller";
import { MyEntityResolver } from "./myEntity.resolver";

@Module({
  imports: [MyEntityModuleBase],
  controllers: [MyEntityController],
  providers: [MyEntityService, MyEntityResolver],
  exports: [MyEntityService],
})
export class MyEntityModule {}
