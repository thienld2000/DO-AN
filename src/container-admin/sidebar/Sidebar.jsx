import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="container">
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/admin">
                            <span className="icon">
                                <ion-icon name="logo-apple"></ion-icon>
                            </span>
                            <span className="title">Side bar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/order">
                            <span className="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span className="title">Đặt bàn</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/menu">
                            <span className="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </span>
                            <span className="title">Menu</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/khuyen-mai">
                            <span className="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="title">Khuyến mãi</span>
                        </Link>
                    </li><li>
                        <Link to="/">
                            <span className="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                            </span>
                            <span className="title">Trang chủ</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <span className="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar