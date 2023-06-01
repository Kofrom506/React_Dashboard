import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const CrudTable: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    form.resetFields();
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = (values: Item) => {
    const newItem: Item = {
      
      ...values,
    };
    const newData = [...data, newItem];
    setData(newData);
    setVisible(false);
  };

  const handleDelete = (record: Item) => {
    const newData = data.filter((item) => item.key !== record.key);
    setData(newData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Action',
      render: (_: any, record: Item) => (
        <Button type="link" danger onClick={() => handleDelete(record)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add New
      </Button>
      <Table dataSource={data} columns={columns} />

      <Modal
        visible={visible}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        okText="Save"
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: 'Please enter an age' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please enter an address' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CrudTable;
