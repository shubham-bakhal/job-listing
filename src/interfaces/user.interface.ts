export enum IUserRole {
  ADMIN = "Terraformers",
  USER = "Applicants",
}

export interface IUser {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  company?: string;
  role: IUserRole;
  deleted?: boolean;
  createAt?: Date;
  updateAt?: Date;
}
