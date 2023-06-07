import { User } from "../user/User";

export type NewEntity = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: User | null;
};
