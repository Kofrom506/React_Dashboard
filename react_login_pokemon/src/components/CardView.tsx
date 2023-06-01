// import React from 'react';
// import { Button, Form, Input, InputNumber } from 'antd';

// const CardView: React.FC = () => (
//     const [formData, setFormData] = useState(DataType);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform any necessary operations with the updated formData
//     console.log(formData);
//   };
//       <Form name="loginForm" onFinish={()=>console.log("")}>
//             <Form.Item
//               label="User ID"
//               name="id"
//               rules={[{ required: true, message: "ID Kosong" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="Name"
//               name="name"
//               rules={[{ required: false, message: "Nama Kosong" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item label="Age">
//                 <InputNumber />
//             </Form.Item>
            
//             <Form.Item
//               label="Address"
//               name="address"
//               rules={[{ required: false, message: "Address Kosong" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="University"
//               name="university"
//               rules={[{ required: false, message: "University Kosong" }]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="Faculty"
//               name="faculty"
//               rules={[{ required: false, message: "Faculty Kosong" }]}
//             >
//               <Input />
//             </Form.Item>
//           </Form>
          
// );

// export default CardView;