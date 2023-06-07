import { NewEntityUpdateManyWithoutUsersInput } from "./NewEntityUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  newEntity?: NewEntityUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  serialNumber?: string | null;
  someField?: string | null;
  username?: string;
};
