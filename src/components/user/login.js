import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "antd/dist/reset.css";
import { Form, Input, Button, Spin, message as antdMessage } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);

    axios
      .post(
        "http://localhost:8080/auth/login",
        { username: values.username, password: values.password },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.message) {
            localStorage.setItem("token", res.data.token);
            Swal.fire({
              title: "Đăng nhập thành công",
              icon: "success",
            });
            navigate(res.data.redirect);
          } else {
            Swal.fire({
              title: "Sai tài khoản hoặc mật khẩu",
              text: "Vui lòng thử lại",
              icon: "error",
            });
          }
        }
      })
      .catch((err) => {
        antdMessage.error(
          err.response?.data || "Có lỗi xảy ra. Vui lòng thử lại!"
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <section id="login">
        <div className="logo-container" style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src="img/logo.png" alt="Logo" style={{ width: "300px" }} />
        </div>
        <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <Form.Item
            label="Tài khoản"
            name="username"
            // rules={[
            //   { required: true, message: "Tài khoản không được để trống" },
            //   { min: 4, message: "Tài khoản phải có ít nhất 4 ký tự" },
            // ]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            // rules={[{ required: true, message: "Mật khẩu không được để trống" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              disabled={loading}
            >
              {loading ? <Spin /> : "Đăng nhập"}
            </Button>
          </Form.Item>
        </Form>
        <p style={{ textAlign: "center" }}>
          Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Login;
