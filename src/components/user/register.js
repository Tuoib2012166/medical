import React, { useState } from 'react';
import { Form, Input, Button, Radio, Spin } from 'antd';
import Swal from 'sweetalert2';
import Header from './header';
import Footer from './footer';
import '../../assets/css/login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    phone: '',
    address: '',
    gender: 1,
    birthYear: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  const handleSubmit = () => {
    setLoading(true);

    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Đăng ký thành công',
          text: 'Bạn có thể đăng nhập ngay bây giờ!',
        });
      })
      .catch(error => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Lỗi đăng ký',
          text: 'Có lỗi xảy ra. Vui lòng thử lại!',
        });
      });
  };

  return (
    <>
      <Header />
      <section id="register" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <img src="img/logo.png" alt="Logo" style={{ width: "300px" }} />
        <h3>Đăng ký tài khoản</h3>
        <Form
          layout="vertical"
          onValuesChange={handleFormChange}
          onFinish={handleSubmit}
          initialValues={formData}
        >
          <Form.Item
            label="Tài khoản"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>

          <Form.Item
            label="Họ và tên"
            name="fullname"
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          <Form.Item label="Giới tính" name="gender">
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={0}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Năm sinh"
            name="birthYear"
            rules={[{ required: true, message: 'Vui lòng nhập năm sinh!' }]}
          >
            <Input placeholder="Nhập năm sinh" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không khớp!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block disabled={loading}>
              {loading ? <Spin /> : 'Đăng ký'}
            </Button>
          </Form.Item>
        </Form>
      </section>
      <Footer />
    </>
  );
};

export default Register;
