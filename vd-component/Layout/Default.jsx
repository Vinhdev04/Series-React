import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, Row } from "antd";
import React, { useState } from 'react';
import Header from "../src/Components";
import Card from "../src/Components/Card";
import "./Default.css";
const { Footer,Sider,Content} = Layout;
function Default(props) {  const [collapsed, setCollapse] = useState(false);
    const items = [
        {
            key:'1',
            label: "Trang Chủ",
            icon: <SettingOutlined />,
            children: [
                    { key: '11', label: 'Home Page' },
                    { key: '12', label: 'Product Page' },
                    { key: '13', label: 'Contact Page' },
                    { key: '14', label: 'About Page' },
                
            ]
        },
        {
            key:'2',
            label: "Trang Sản Phẩm",
            icon: <MailOutlined />,
            children: [
                    { key: '21', label: 'Thêm Sản Phẩm' },
                    { key: '22', label: 'Sửa Sản Phẩm' },
                    { key: '23', label: 'Xóa Sản Phẩm' },
                
            ]
        },
        {
            key:'3',
            label: "Trang Quản Lý",
            icon: <AppstoreOutlined />,
            children: [
                    { key: '31', label: 'Account' },
                    { key: '32', label: 'Setting' },
                    { key: '33', label: 'Message' },
                    { key: '34', label: 'System' },
                
            ]
        }
    ]
    return (
        <Layout>
            <Header></Header>
            <Layout>
                <Content className="wrap-card">
                    <Row className="card" gutter={[10,20]}>
                        <Card/>
                    </Row>
                </Content>
                <Sider style={{width: "25%"}} theme='light' collapsed={collapsed}>
                    <Menu mode="inline"  items={items} defaultOpenKeys={['2']}    defaultSelectedKeys={['2']}></Menu>
                </Sider>
            </Layout>
            <Footer style={{ background: "#fff", padding: "20px" }}>
                <Row gutter={[16, 16]}>
                   
                    <Col xs={24} sm={12} md={6}>
                        <h3>Thông tin liên hệ</h3>
                        <p>Địa Chỉ: số 18 ngõ 357 Tam Trinh, P. Hoàng Văn Thụ, Hoàng Mai, Hà Nội</p>
                        <p>Số điện thoại: 0988.965.716 - 0988.4999.30 - 0988.4999.60</p>
                        <p>Email: shoptaycam@gmail.com</p>
                        <p>Website: www.shoptaycam.com</p>
                        <div style={{ marginTop: "10px" }}>
                            {/* Icon mạng xã hội */}
                            <i className="fab fa-facebook" style={{ marginRight: "10px" }}></i>
                            <i className="fab fa-twitter" style={{ marginRight: "10px" }}></i>
                            <i className="fab fa-google-plus-g" style={{ marginRight: "10px" }}></i>
                            <i className="fab fa-linkedin" style={{ marginRight: "10px" }}></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <h3>Quy định & hướng dẫn</h3>
                        <p>Hướng dẫn mua hàng</p>
                        <p>Hình thức thanh toán</p>
                        <p>Quy trình thực hiện</p>
                        <p>Dịch vụ chuyển SHIP COD</p>

                        <h3 style={{ marginTop: "20px" }}>Thông tin chung</h3>
                        <p>Giới thiệu Công ty</p>
                        <p>Năng lực sản xuất</p>
                        <p>Thư ngỏ đối tác</p>
                        <p>Bán hàng</p>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <h3>Danh mục sản phẩm</h3>
                        <p>Tay Cầm FO4 Đáng Mua Nhất</p>
                        <p>Tay Cầm Xbox 360</p>
                        <p>Tay Cầm PS4</p>
                        <p>Tay Cầm PS5</p>
                        <p>Tay Cầm Xbox</p>
                        <p>Tay Cầm Xbox Series X</p>
                        <p>Tay Cầm Gamesir</p>
                        <p>Máy Chơi Game</p>
                        <p>Phụ kiện tay cầm</p>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <h3>Sản phẩm nổi bật</h3>
                        <div>
                            <p>
                            <del>1.250.000₫</del> <strong>850.000₫</strong><br/>
                            Tay Cầm COIORVIS JueYing Pro HD
                            </p>
                            <p>
                            <del>650.000₫</del> <strong>479.000₫</strong><br/>
                            Tay Cầm GameSir NOVA LITE 2 (Trắng)
                            </p>
                            <p>
                            <del>650.000₫</del> <strong>479.000₫</strong><br/>
                            Tay Cầm GameSir NOVA LITE 2 (Đen)
                            </p>
                            <p>
                            <del>1.250.000₫</del> <strong>850.000₫</strong><br/>
                            Tay Cầm EASYSMX D10
                            </p>
                        </div>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
}

export default Default;