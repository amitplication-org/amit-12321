import { MyEntityWhereInput } from "./MyEntityWhereInput";
import { MyEntityOrderByInput } from "./MyEntityOrderByInput";

export type MyEntityFindManyArgs = {
  where?: MyEntityWhereInput;
  orderBy?: Array<MyEntityOrderByInput>;
  skip?: number;
  take?: number;
};
