import { useState } from "react";
import "./App.css";

import Modal from "antd/es/modal/Modal";
import { Form, Input } from "../../node_modules/antd/es/index";

function modalForm() {
  const [person, setPerson] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDetailClicked, setIsDetailClicked] = useState<any>(null);


  return (

    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={() => {
        setIsModalOpen(false);
        // handleCancel()
        // saveData()
        // setStatus(true)
      }}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form name="Form" onFinish={() => console.log("Submitted")}>
        <Form.Item label="User ID" name="id">
          <Input onChange={(e) => setUserID(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: false, message: "Nama Kosong" }]}
        >
          <Input onChange={(e) => setUserName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Age">
          <Input onChange={(e) => setUserAge(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: false, message: "Address Kosong" }]}
        >
          <Input onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="University"
          name="university"
          rules={[{ required: false, message: "University Kosong" }]}
        >
          <Input onChange={(e) => setUniversity(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Faculty"
          name="faculty"
          rules={[{ required: false, message: "Faculty Kosong" }]}
        >
          <Input onChange={(e) => setFaculty(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>

  );
}
export default modalForm;
