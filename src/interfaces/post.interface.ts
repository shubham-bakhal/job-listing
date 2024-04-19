export interface IPost {
  title: string;
  description: string;
  location: string;
  deadline: Date;
  contactPhoneNumber: string;
  contactEmail: string;
  archived: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deleted: boolean;
}
