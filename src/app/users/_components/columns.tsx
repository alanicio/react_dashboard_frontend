import { User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const createColumns = (): ColumnDef<User>[] => [
   {
      accessorKey: "id",
      header: "ID",
      size: 50,
   },
   {
      accessorKey: "photo",
      header: "Photo",
      cell: ({ getValue }) => {
         return (
            <Image
               src={getValue<string>()}
               className="h-10 w-10 rounded-full"
               alt="user photo"
               width={40}
               height={40}
            />
         );
      },
   },
   {
      accessorKey: "name",
      header: "Name",
   },
   {
      accessorKey: "email",
      header: "Email",
   },
   {
      accessorKey: "birthdate",
      header: "Birthdate",
      cell: ({ getValue }) => {
         const date = new Date(getValue<string>());
         return <div>{date.toLocaleDateString()}</div>;
      },
   },
];
