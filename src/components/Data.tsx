export interface TaskType {
  userId: number;
  _id?: string;
  title: string;
  status: string;
  category: string;
  content: string;
  image: string;
}
export interface ColumnType {
  title: string;
  _id?: string;
  status: string;
}
export interface UserType {
  _id: string;
  username: string;
  email: string;
  password?: string;
}
