import { NewEntityWhereInput } from "./NewEntityWhereInput";
import { NewEntityOrderByInput } from "./NewEntityOrderByInput";

export type NewEntityFindManyArgs = {
  where?: NewEntityWhereInput;
  orderBy?: Array<NewEntityOrderByInput>;
  skip?: number;
  take?: number;
};
