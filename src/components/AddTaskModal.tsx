// import React, { useState } from "react";
// import { UserType } from "./Data";

// interface AddTaskModalProps {
//   onClose: () => void;
//   onSave: (
//     _id: string,
//     title: string,
//     status: string,
//     userId: number,
//     category: string,
//     content: string,
//     image: string
//   ) => void;
//   userList: UserType[];
// }

// const AddTaskModal: React.FC<AddTaskModalProps> = ({
//   onClose,
//   onSave,
//   userList,
// }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     status: "To do",
//     selectedUserId: userList.length > 0 ? userList[0].id : 1,
//     category: "",
//     content: "",
//     image: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     onSave(
//       formData.title,
//       formData.status,
//       formData.selectedUserId,
//       formData.category,
//       formData.content,
//       formData.image
//     );
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>
//           &times;
//         </span>
//         <h2>Thêm Task Mới</h2>
//         <label className="block text-left mb-2 font-medium">
//           Title :
//           <input
//             type="text"
//             name="title"
//             placeholder="Tên tiến trình"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="block text-left mb-2 font-medium">
//           Content:
//           <input
//             type="text"
//             name="content"
//             placeholder="Nội dung chi tiết"
//             value={formData.content}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="block text-left mb-2 font-medium">
//           Category:
//           <input
//             type="text"
//             name="category"
//             placeholder="Danh mục"
//             value={formData.category}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="block text-left mb-2 font-medium">
//           URL Hình ảnh:
//           <input
//             type="text"
//             name="image"
//             placeholder="URL Hình ảnh"
//             value={formData.image}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="block text-left mb-2 font-medium">
//           Người dùng:
//           <select
//             name="selectedUserId"
//             value={formData.selectedUserId}
//             onChange={handleChange}
//           >
//             {userList.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.username} ({user.email})
//               </option>
//             ))}
//           </select>
//         </label>
//         <label className="block text-left mb-2 font-medium">
//           Trạng thái:
//           <select name="status" value={formData.status} onChange={handleChange}>
//             <option value="To do">To do</option>
//             <option value="On Progress">On Progress</option>
//             <option value="Done">Done</option>
//           </select>
//         </label>
//         <button onClick={handleSave}>Lưu</button>
//       </div>
//     </div>
//   );
// };

// export default AddTaskModal;
