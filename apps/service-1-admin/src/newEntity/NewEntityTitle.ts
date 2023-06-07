import { NewEntity as TNewEntity } from "../api/newEntity/NewEntity";

export const NEWENTITY_TITLE_FIELD = "id";

export const NewEntityTitle = (record: TNewEntity): string => {
  return record.id || String(record.id);
};
