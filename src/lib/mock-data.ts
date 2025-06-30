import { User } from "@/types/user";
import { faker } from "@faker-js/faker";

faker.seed(2);

interface UsersResponse {
   totalUsers: number;
   totalPages: number;
   data: User[];
}

export const generateUsersData = (numberOfUsers: number): UsersResponse => ({
   totalUsers: numberOfUsers,
   totalPages: Math.ceil(numberOfUsers / 10),
   data: Array.from({ length: numberOfUsers }, (_, index) => ({
      id: index + 1,
      uuid: faker.string.uuid(),
      photo: faker.image.avatar(),
      name: faker.person.fullName(),
      email: faker.internet.email({ provider: "alanicio.com" }),
      createdAt: faker.date.between({ from: "2018-01-01", to: "2024-12-31" }),
      birthdate: faker.date.birthdate({ min: 18, max: 50, mode: "age" }),
   })),
});
