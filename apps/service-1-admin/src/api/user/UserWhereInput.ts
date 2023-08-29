import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NewEntityListRelationFilter } from "../newEntity/NewEntityListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  newEntity?: NewEntityListRelationFilter;
  serialNumber?: StringNullableFilter;
  someField?: StringNullableFilter;
  username?: StringFilter;
};
