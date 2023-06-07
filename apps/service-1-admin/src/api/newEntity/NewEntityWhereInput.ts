import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NewEntityWhereInput = {
  id?: StringFilter;
  users?: UserWhereUniqueInput;
};
