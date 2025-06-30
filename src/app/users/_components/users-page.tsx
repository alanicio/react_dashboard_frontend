"use client";

import { DataTable } from "@/components/table/data-table";
import { User } from "@/types/user";
import React from "react";
import { createColumns } from "./columns";
import PageHeader from "@/components/layout/page-header";

interface UsersPageProps {
   intialUsers: User[];
}
const UsersPage = ({ intialUsers }: UsersPageProps) => {
   const columns = createColumns();
   return (
      <>
         <PageHeader title="Users" subtitle="List of users" />
         <DataTable columns={columns} data={intialUsers} />;
      </>
   );
};

export default UsersPage;
