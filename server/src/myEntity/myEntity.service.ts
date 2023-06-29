import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyEntityServiceBase } from "./base/myEntity.service.base";

@Injectable()
export class MyEntityService extends MyEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
