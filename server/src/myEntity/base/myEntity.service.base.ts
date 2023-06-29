/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MyEntity } from "@prisma/client";

export class MyEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MyEntityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MyEntityCountArgs>
  ): Promise<number> {
    return this.prisma.myEntity.count(args);
  }

  async findMany<T extends Prisma.MyEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MyEntityFindManyArgs>
  ): Promise<MyEntity[]> {
    return this.prisma.myEntity.findMany(args);
  }
  async findOne<T extends Prisma.MyEntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MyEntityFindUniqueArgs>
  ): Promise<MyEntity | null> {
    return this.prisma.myEntity.findUnique(args);
  }
  async create<T extends Prisma.MyEntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MyEntityCreateArgs>
  ): Promise<MyEntity> {
    return this.prisma.myEntity.create<T>(args);
  }
  async update<T extends Prisma.MyEntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MyEntityUpdateArgs>
  ): Promise<MyEntity> {
    return this.prisma.myEntity.update<T>(args);
  }
  async delete<T extends Prisma.MyEntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MyEntityDeleteArgs>
  ): Promise<MyEntity> {
    return this.prisma.myEntity.delete(args);
  }
}
