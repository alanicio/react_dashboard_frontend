import { FAKER_DATA_MAP } from "@/constants/faker-data-map";

const serverFetchData = (dataSource: keyof typeof FAKER_DATA_MAP) => {
   return FAKER_DATA_MAP[dataSource]();
};

export default serverFetchData;
