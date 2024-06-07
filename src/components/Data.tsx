export interface Task {
    title: string;
    description: string;
    defaultDropdownValue: string;
    dropdownOptions: string[];
  }
export const initialData = [
    {
      title: 'Bắt đầu',
      tasks: [
        { title: 'Task 1', description: 'Tiến trình 1', defaultDropdownValue: 'Bắt đầu', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 2', description: 'Tiến trình 2', defaultDropdownValue: 'Bắt đầu', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 3', description: 'Tiến trình 3', defaultDropdownValue: 'Bắt đầu', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 4', description: 'Tiến trình 4', defaultDropdownValue: 'Bắt đầu', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 5', description: 'Tiến trình 5', defaultDropdownValue: 'Bắt đầu', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
      ],
    },
    {
      title: 'Đang tiến hành',
      tasks: [
        { title: 'Task 6', description: 'Tiến trình 6', defaultDropdownValue: 'Đang tiến hành', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 7', description: 'Tiến trình 7', defaultDropdownValue: 'Đang tiến hành', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 8', description: 'Tiến trình 8', defaultDropdownValue: 'Đang tiến hành', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 9', description: 'Tiến trình 9', defaultDropdownValue: 'Đang tiến hành', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
      ],
    },
    {
      title: 'Hoàn thành',
      tasks: [
        { title: 'Task 10', description: 'Tiến trình 10', defaultDropdownValue: 'Hoàn thành', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
        { title: 'Task 11', description: 'Tiến trình 11', defaultDropdownValue: 'Hoàn thành', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
      ],
    },
    {
      title: 'Kết thúc',
      tasks: [
        { title: 'Task 12', description: 'Tiến trình 12', defaultDropdownValue: 'Kết thúc', dropdownOptions: ['Bắt đầu', 'Đang tiến hành', 'Hoàn thành', 'Kết thúc'] },
      ],
    },
  ];
  