import { useState } from "react";
// import "./App.css";

// import Modal from "antd/es/modal/Modal";
import { Form, Input, Modal } from "antd";
import { IPersonProps,Person } from "../model/person";


function ModalForm(props: IPersonProps) {

  const [personState, setPersonState] = useState<Person | null>(props.person);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState<any>(null);

  return (

    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={() => {
        setIsModalOpen(false);
        setPersonState(props.person);
        console.log(personState?.userName)
        // handleCancel()
        // saveData()
        // setStatus(true)
      }}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form name="Form" onFinish={() => console.log("Submitted")}>
        <Form.Item label="User ID" name="id">
          <Input onChange={(e: any) => props.person.userID = e.target.value} />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: false, message: "Nama Kosong" }]}
        >
          <Input onChange={(e: any) => props.person.userName = e.target.value} />
        </Form.Item>
        <Form.Item label="Age">
          <Input onChange={(e: any) => props.person.age = e.target.value} />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: false, message: "Address Kosong" }]}
        >
          <Input onChange={(e: any) => props.person.address = e.target.value} />
        </Form.Item>
        <Form.Item
          label="University"
          name="university"
          rules={[{ required: false, message: "University Kosong" }]}
        >
          <Input onChange={(e: any) => props.person.university = e.target.value} />
        </Form.Item>
        <Form.Item
          label="Faculty"
          name="faculty"
          rules={[{ required: false, message: "Faculty Kosong" }]}
        >
          <Input onChange={(e: any) => props.person.faculty = e.target.value} />
        </Form.Item>
      </Form>
    </Modal>

  );
}
export default ModalForm;
