import { MyEntity as TMyEntity } from "../api/myEntity/MyEntity";

export const MYENTITY_TITLE_FIELD = "id";

export const MyEntityTitle = (record: TMyEntity): string => {
  return record.id || String(record.id);
};
