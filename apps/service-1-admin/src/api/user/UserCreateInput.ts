import { NewEntityCreateNestedManyWithoutUsersInput } from "./NewEntityCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  newEntity?: NewEntityCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  serialNumber?: string | null;
  someField?: string | null;
  username: string;
};
