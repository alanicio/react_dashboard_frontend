"use client";

import { DataTable } from "@/components/table/data-table";
import { User } from "@/types/user";
import React from "react";
import { createColumns } from "./columns";

interface UsersPageProps {
   intialUsers: User[];
}
const UsersPage = ({ intialUsers }: UsersPageProps) => {
   const columns = createColumns();
   return <DataTable columns={columns} data={intialUsers} />;
};

export default UsersPage;
