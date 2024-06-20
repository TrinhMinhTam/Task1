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
  id: number;
  status: string;
}
export const columns: ColumnType[] = [
  {
    title: "To do",
    status: "To do",
    id: 1,
  },
  {
    title: "On Progress",
    status: "On Progress",
    id: 2,
  },
  {
    title: "Done",
    status: "Done",
    id: 3,
  },
];
export interface UserType {
  id: number;
  username: string;
  email: string;
}
