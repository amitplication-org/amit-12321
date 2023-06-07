/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, NewEntity, User } from "@prisma/client";

export class NewEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NewEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewEntityFindManyArgs>
  ): Promise<number> {
    return this.prisma.newEntity.count(args);
  }

  async findMany<T extends Prisma.NewEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewEntityFindManyArgs>
  ): Promise<NewEntity[]> {
    return this.prisma.newEntity.findMany(args);
  }
  async findOne<T extends Prisma.NewEntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewEntityFindUniqueArgs>
  ): Promise<NewEntity | null> {
    return this.prisma.newEntity.findUnique(args);
  }
  async create<T extends Prisma.NewEntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewEntityCreateArgs>
  ): Promise<NewEntity> {
    return this.prisma.newEntity.create<T>(args);
  }
  async update<T extends Prisma.NewEntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewEntityUpdateArgs>
  ): Promise<NewEntity> {
    return this.prisma.newEntity.update<T>(args);
  }
  async delete<T extends Prisma.NewEntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewEntityDeleteArgs>
  ): Promise<NewEntity> {
    return this.prisma.newEntity.delete(args);
  }

  async getUsers(parentId: string): Promise<User | null> {
    return this.prisma.newEntity
      .findUnique({
        where: { id: parentId },
      })
      .users();
  }
}
