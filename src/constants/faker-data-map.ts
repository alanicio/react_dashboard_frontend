import { generateUsersData } from "@/lib/mock-data";

export const FAKER_DATA_MAP = {
   USERS: () => generateUsersData(200),
};

export type DataSource = keyof typeof FAKER_DATA_MAP;

export const DATA_SOURCES = Object.keys(FAKER_DATA_MAP).reduce(
   (obj, key) => ({ ...obj, [key]: key }),
   {} as { [K in DataSource]: K }
);
