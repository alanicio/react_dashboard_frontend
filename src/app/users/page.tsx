import { DATA_SOURCES } from "@/constants/faker-data-map";
import serverFetchData from "@/lib/server/server-fetch-data";
import UsersPage from "./_components/users-page";

const Page = () => {
   const response = serverFetchData(DATA_SOURCES.USERS);
   return <UsersPage intialUsers={response.data} />;
};

export default Page;
