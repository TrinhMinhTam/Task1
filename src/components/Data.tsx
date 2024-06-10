export interface TaskType {
    id: string;
    title: string;
    description: string;
    defaultDropdownValue: string;
    dropdownOptions: {id: string; value: string; }[];
  }
export const initialData = [
  {
    title: 'Bắt đầu',
    tasks: [
      { 
        id: '1', 
        title: 'Task 1', 
        description: 'Tiến trình 1', 
        defaultDropdownValue: 'Bắt đầu', 
        dropdownOptions: [
          { id: '1-1', value: 'Bắt đầu' }, 
          { id: '1-2', value: 'Đang tiến hành' }, 
          { id: '1-3', value: 'Hoàn thành' }, 
          { id: '1-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '2', 
        title: 'Task 2', 
        description: 'Tiến trình 2', 
        defaultDropdownValue: 'Bắt đầu', 
        dropdownOptions: [
          { id: '2-1', value: 'Bắt đầu' }, 
          { id: '2-2', value: 'Đang tiến hành' }, 
          { id: '2-3', value: 'Hoàn thành' }, 
          { id: '2-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '3', 
        title: 'Task 3', 
        description: 'Tiến trình 3', 
        defaultDropdownValue: 'Bắt đầu', 
        dropdownOptions: [
          { id: '3-1', value: 'Bắt đầu' }, 
          { id: '3-2', value: 'Đang tiến hành' }, 
          { id: '3-3', value: 'Hoàn thành' }, 
          { id: '3-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '4', 
        title: 'Task 4', 
        description: 'Tiến trình 4', 
        defaultDropdownValue: 'Bắt đầu', 
        dropdownOptions: [
          { id: '4-1', value: 'Bắt đầu' }, 
          { id: '4-2', value: 'Đang tiến hành' }, 
          { id: '4-3', value: 'Hoàn thành' }, 
          { id: '4-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '5', 
        title: 'Task 5', 
        description: 'Tiến trình 5', 
        defaultDropdownValue: 'Bắt đầu', 
        dropdownOptions: [
          { id: '5-1', value: 'Bắt đầu' }, 
          { id: '5-2', value: 'Đang tiến hành' }, 
          { id: '5-3', value: 'Hoàn thành' }, 
          { id: '5-4', value: 'Kết thúc' }
        ] 
      },
    ],
  },
  {
    title: 'Đang tiến hành',
    tasks: [
      { 
        id: '6', 
        title: 'Task 6', 
        description: 'Tiến trình 6', 
        defaultDropdownValue: 'Đang tiến hành', 
        dropdownOptions: [
          { id: '6-1', value: 'Bắt đầu' }, 
          { id: '6-2', value: 'Đang tiến hành' }, 
          { id: '6-3', value: 'Hoàn thành' }, 
          { id: '6-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '7', 
        title: 'Task 7', 
        description: 'Tiến trình 7', 
        defaultDropdownValue: 'Đang tiến hành', 
        dropdownOptions: [
          { id: '7-1', value: 'Bắt đầu' }, 
          { id: '7-2', value: 'Đang tiến hành' }, 
          { id: '7-3', value: 'Hoàn thành' }, 
          { id: '7-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '8', 
        title: 'Task 8', 
        description: 'Tiến trình 8', 
        defaultDropdownValue: 'Đang tiến hành', 
        dropdownOptions: [
          { id: '8-1', value: 'Bắt đầu' }, 
          { id: '8-2', value: 'Đang tiến hành' }, 
          { id: '8-3', value: 'Hoàn thành' }, 
          { id: '8-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '9', 
        title: 'Task 9', 
        description: 'Tiến trình 9', 
        defaultDropdownValue: 'Đang tiến hành', 
        dropdownOptions: [
          { id: '9-1', value: 'Bắt đầu' }, 
          { id: '9-2', value: 'Đang tiến hành' }, 
          { id: '9-3', value: 'Hoàn thành' }, 
          { id: '9-4', value: 'Kết thúc' }
        ] 
      },
    ],
  },
  {
    title: 'Hoàn thành',
    tasks: [
      { 
        id: '10', 
        title: 'Task 10', 
        description: 'Tiến trình 10', 
        defaultDropdownValue: 'Hoàn thành', 
        dropdownOptions: [
          { id: '10-1', value: 'Bắt đầu' }, 
          { id: '10-2', value: 'Đang tiến hành' }, 
          { id: '10-3', value: 'Hoàn thành' }, 
          { id: '10-4', value: 'Kết thúc' }
        ] 
      },
      { 
        id: '11', 
        title: 'Task 11', 
        description: 'Tiến trình 11', 
        defaultDropdownValue: 'Hoàn thành', 
        dropdownOptions: [
          { id: '11-1', value: 'Bắt đầu' }, 
          { id: '11-2', value: 'Đang tiến hành' }, 
          { id: '11-3', value: 'Hoàn thành' }, 
          { id: '11-4', value: 'Kết thúc' }
        ] 
      },
    ],
  },
  {
    title: 'Kết thúc',
    tasks: [
      { 
        id: '12', 
        title: 'Task 12', 
        description: 'Tiến trình 12', 
        defaultDropdownValue: 'Kết thúc', 
        dropdownOptions: [
          { id: '12-1', value: 'Bắt đầu' }, 
          { id: '12-2', value: 'Đang tiến hành' }, 
          { id: '12-3', value: 'Hoàn thành' }, 
          { id: '12-4', value: 'Kết thúc' }
        ] 
      },
    ],
  },
];