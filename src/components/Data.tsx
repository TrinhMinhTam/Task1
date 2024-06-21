export interface TaskType {
  userId: number;
  _id?: string;
  // id: number;
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
  id: number;
  username: string;
  email: string;
}
