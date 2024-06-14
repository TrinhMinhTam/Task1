export interface TaskType {
  userId: number;
  id: number;
  title: string;
  status: string;
}
export interface ColumnType {
  title: string;
  id: number;
  status: string;
}
export const columns: ColumnType[] = [
  {
    title: "Bắt đầu",
    status: "Bắt đầu",
    id: 1,
  },
  {
    title: "Đang tiến hành",
    status: "Đang tiến hành",
    id: 2,
  },
  {
    title: "Hoàn thành",
    status: "Hoàn thành",
    id: 3,
  },
  {
    title: "Kết thúc",
    status: "Kết thúc",
    id: 4,
  },
];
// function getDefaultById(id: string): string{
//   switch (id) {
//     case '1':
//         return 'Bắt đầu';
//     case '2':
//         return 'Đang tiến hành';
//     case '3':
//         return 'Hoàn thành';
//     case '4':
//         return 'Kết thúc';
//     default:
//         return '';
// }
// }

export const initialData: TaskType[] = [
  {
    userId: 1,
    id: 0,
    title: "Tiến trình 1",
    status: "Bắt đầu",
  },
  {
    userId: 1,
    id: 1,
    title: "Tiến trình 2",
    status: "Hoàn thành",
  },
  {
    userId: 1,
    id: 2,
    title: "Tiến trình 3",
    status: "Bắt đầu",
  },
  {
    userId: 1,
    id: 3,
    title: "Tiến trình 4",
    status: "Hoàn thành",
  },
  {
    userId: 1,
    id: 4,
    title: "Tiến trình 5",
    status: "Đang tiến hành",
  },
  {
    userId: 1,
    id: 5,
    title: "Tiến trình 6",
    status: "Kết thúc",
  },
  {
    userId: 1,
    id: 6,
    title: "Tiến trình 7",
    status: "Đang tiến hành",
  },
  {
    userId: 1,
    id: 7,
    title: "Tiến trình 8",
    status: "Kết thúc",
  },
];
