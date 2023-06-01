import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";


import { Avatar, Col, Divider, Row, Carousel, Form, Input, Button, Table,Space,Tag, InputNumber} from 'antd'
import type { ColumnsType } from 'antd/es/table';
import Modal from 'antd/es/modal/Modal';
import { DataType } from '../interface';

function HomeView() {
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [userID,setUserID] = useState("");
    const [username,setUserName] = useState("");
    const [age,setUserAge] = useState("");
    const [address,setAddress] = useState("");
    const [university,setUniversity] = useState("");
    const [faculty,setFaculty] = useState("");
    const [key,setKey] = useState(0);
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
    }


    const saveData = () => {
        setKey(Math.random())
         setKey(Math.random())  

        setDataSource([...dataSource, newData]);
    };
    var json = JSON.stringify(data)
    localStorage.setItem("Data",json);
    
      const columns: ColumnsType<DataType> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'University',
            dataIndex: 'university',
            key: 'university',
          },
          {
            title: 'Faculty',
            dataIndex: 'faculty',
            key: 'faculty',
          },
        {
          title: 'Action',
          key: 'action',
          render: (record) => (
            <Space size="middle">
                <Button type="primary" onClick={showModalEdit}>
                        Edit
                    </Button>
                    <Modal title="Edit User" open={isEditClicked} onOk={()=>{
                        handleOkEdit()
                    }
                        } onCancel={handleCancelEdit}>
                        
                    <Form name="loginForm" onFinish={()=>console.log("")}>
            <Form.Item
              label="User ID"
              name="id"
              rules={[{ required: true, message: "ID Kosong" }]}
            >
              <Input  onChange={(e)=>setUserID(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: false, message: "Nama Kosong" }]}
            >
              <Input onChange={(e)=>setUserName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Age">
                <Input onChange={(e)=>setUserAge(e.target.value)}/>
            </Form.Item>
            
            
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: false, message: "Address Kosong" }]}
            >
               <Input  onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="University"
              name="university"
              rules={[{ required: false, message: "University Kosong" }]}
            >
               <Input  onChange={(e)=>setUniversity(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Faculty"
              name="faculty"
              rules={[{ required: false, message: "Faculty Kosong" }]}
            >
               <Input  onChange={(e)=>setFaculty(e.target.value)}/>
            </Form.Item>


          </Form>
                    </Modal>
                    <Button style={{color : status ? "#EE4B2B" : "#808080" }} type="default" onClick={()=>setIsDeleteClicked(isDeleteClicked)}>
                        Delete
                    </Button>
                    <Button type="default" onClick={() => setIsDetailClicked(record)}>
                        Details
                    </Button>
                    <Modal title="Detail User" open={!!isDetailClicked} onOk={handleOkDetail} onCancel={handleCancelDetail}>
                        {!!isDetailClicked && <>
                        <p>id: {isDetailClicked.id}</p>
                        <p>name: {isDetailClicked.name}</p>
                        <p>age: {isDetailClicked.age}</p>
                        <p>address: {isDetailClicked.address}</p>
                        <p>university: {isDetailClicked.university}</p>
                        <p>faculty: {isDetailClicked.faculty}</p>
                        </>}
                        
                    </Modal>
            </Space>
          ),
        },
      ];
      
  return (
    <>
      <div>
        <h1>
            Dashboard Database OCBC NISP
        </h1>
      <Table columns={columns} dataSource={dataSource} />
      <div className='card'>
      <Button type="primary" onClick={showModal}>
        Add Person
      </Button>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk = {()=>{
        handleCancel()
        saveData()
        setStatus(true)
        
      }} onCancel={handleCancel}>
      <Form name="loginForm" onFinish={()=>console.log("")}>
            <Form.Item
            
              label="User ID"
              name="id"
              rules={[{ required: true, message: "ID Kosong" }]}
            >
              <Input  onChange={(e)=>setUserID(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: false, message: "Nama Kosong" }]}
            >
              <Input onChange={(e)=>setUserName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Age">
                <Input onChange={(e)=>setUserAge(e.target.value)}/>
            </Form.Item>
            
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: false, message: "Address Kosong" }]}
            >
               <Input  onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="University"
              name="university"
              rules={[{ required: false, message: "University Kosong" }]}
            >
               <Input  onChange={(e)=>setUniversity(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Faculty"
              name="faculty"
              rules={[{ required: false, message: "Faculty Kosong" }]}
            >
               <Input  onChange={(e)=>setFaculty(e.target.value)}/>
            </Form.Item>


          </Form>
      </Modal>
      
      </div>
     
    </>
    
  )
}



export default HomeView


var data: DataType[] = [
    {
         isActive: false,
      id: "31730304050601",
      key: '1',
      faculty: "Computer Science",
      university: "Universitas Indonesia",
      name: 'John Brown',
      age: "32",
      address: 'New York No. 1 Lake Park',
    },
    {
        isActive: false,
        id: "3173030405060405",
        key: '2',
        faculty: "Electrical Engineering",
        university: "Universitas Gajah Mada",
        name: 'John Black',
        age: "34",
        address: 'New York No. 1 Lake Park',
    },
    
    // {
    //     id: "3173030405060405",
    //     key: '2',
    //     faculty: "Electrical Engineering",
    //     university: "Universitas Gajah Mada",
    //     name: 'John Black',
    //     age: 34,
    //     address: 'New York No. 1 Lake Park',
    // },

    
  ];

