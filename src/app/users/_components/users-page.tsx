import { User } from "@/types/user";
import React from "react";

interface UsersPageProps {
   intialUsers: User[];
}
const UsersPage = ({ intialUsers }: UsersPageProps) => {
   return intialUsers.map((user) => <div key={user.id}>{user.name}</div>);
};

export default UsersPage;
