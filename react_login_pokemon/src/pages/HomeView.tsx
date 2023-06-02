import { useState } from "react";
// import axios from "axios";

import {
  Avatar,
  Col,
  Divider,
  Row,
  Carousel,
  Form,
  Input,
  Button,
  Table,
  Space,
  Tag,
  InputNumber,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Modal from "antd/es/modal/Modal";
import { DataType } from "../interface";

// import ModalForm from "./components/ModalForm";
// import ModalForm from "./components/ModalForm";
import { Person } from "../model/person";
import ModalForm from "../components/modalForm";

function HomeView() {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [userID, setUserID] = useState("");
  const [username, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const [address, setAddress] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [key, setKey] = useState(0);
  const [status, setStatus] = useState(false);

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState(data);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalEdit = () => {
    setIsEditClicked(true);
  };

  const handleOkEdit = () => {
    setIsEditClicked(false);
  };

  const handleCancelEdit = () => {
    setIsEditClicked(false);
  };

  const showModalDetail = () => {
    setIsDetailClicked(null);
  };

  const handleOkDetail = () => {
    setIsDetailClicked(null);
  };

  const handleCancelDetail = () => {
    setIsDetailClicked(null);
  };

  // const newData: DataType = {
  //         id: "3173030405060405",
  //         key: '2',
  //         faculty: "Electrical Engineering",
  //         university: "Universitas Gajah Mada",
  //         name: 'John Black',
  //         age: 34,
  //         address: 'New York No. 1 Lake Park',
  //     }
  var newData: DataType = {
    isActive: true,
    id: userID,
    key: key.toString(),
    faculty: faculty,
    university: university,
    name: username,
    age: age,
    address: address,
  };

  const saveData = () => {
    setKey(Math.random());
    setKey(Math.random());

    // setDataSource([...dataSource, newData]);
  };
  var json = JSON.stringify(data);
  localStorage.setItem("Data", json);

  const columns: ColumnsType<DataType> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "University",
      dataIndex: "university",
      key: "university",
    },
    {
      title: "Faculty",
      dataIndex: "faculty",
      key: "faculty",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={showModalEdit}>
            Edit
          </Button>

          <Button
            style={{ color: status ? "#EE4B2B" : "#808080" }}
            type="default"
            onClick={() => setIsDeleteClicked(isDeleteClicked)}
          >
            Delete
          </Button>
          <Button type="default" onClick={() => setIsDetailClicked(record)}>
            Details
          </Button>
          <Modal
            title="Detail User"
            open={!!isDetailClicked}
            onOk={handleOkDetail}
            onCancel={handleCancelDetail}
          >
            {!!isDetailClicked && (
              <>
                {/* <p>id: {isDetailClicked.id}</p>
                <p>name: {isDetailClicked.name}</p>
                <p>age: {isDetailClicked.age}</p>
                <p>address: {isDetailClicked.address}</p>
                <p>university: {isDetailClicked.university}</p>
                <p>faculty: {isDetailClicked.faculty}</p> */}
              </>
            )
            }
          </Modal>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <h1>Dashboard Database OCBC NISP</h1>
        {/* <Table columns={columns} dataSource={dataSource} /> */}
        <div className="card">
          <Button type="primary" onClick={showModal}>
            Add Person
          </Button>
          {/* <ModalForm person = {data[0]} ></ModalForm> */}
        </div>
      </div>
    </>
  );
}

export default HomeView;

var data: Person[] = [
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
  new Person(10,"Evan",10,"Jalan Mangga Besar IV E","Universitas Indonesioa","Teknik Informatika"),
 ];