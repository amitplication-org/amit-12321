import { NewEntity } from "../newEntity/NewEntity";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  newEntity?: Array<NewEntity>;
  roles: JsonValue;
  serialNumber: string | null;
  someField: string | null;
  updatedAt: Date;
  username: string;
};
