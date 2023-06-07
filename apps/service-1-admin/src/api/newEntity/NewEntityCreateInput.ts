import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NewEntityCreateInput = {
  users?: UserWhereUniqueInput | null;
};
