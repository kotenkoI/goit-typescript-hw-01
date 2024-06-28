export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleRec = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoleRec = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
