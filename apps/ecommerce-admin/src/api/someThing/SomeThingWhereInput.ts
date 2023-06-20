import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SomeThingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
