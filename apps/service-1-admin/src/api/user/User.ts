import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  serialNumber: string | null;
  someField: string | null;
  updatedAt: Date;
  username: string;
};
