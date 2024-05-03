import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import ProductPreview from '../../components/Product/ProductPreview'
import TableOrder from '../order/TableOrder'
import { useEffect, useState } from 'react'
import { images } from '../../constants'

const Dashboard = () => {

    const [orders, setOrders] = useState([]);
    const [khuyenMais, setKhuyenMais] = useState([]);

    useEffect(() => {
        fetchListKhuyenmai();
        fetchListOrders();
    }, []);
    const fetchListOrders = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/order/orders')
            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            }
        } catch (error) {

            console.error('Error fetching user list:', error);
        }
    };
    const fetchListKhuyenmai = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/khuyen_mai/khuyen_mais')
            if (response.ok) {
                const data = await response.json();
                setKhuyenMais(data);
            }
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };


    return (
        <>
            {/* <!-- ========================= Main ==================== --> */}
            <div className="main">
                {/* <!-- ======================= Cards ================== --> */}
                <div className="cardBox">
                    <div className="card">
                        <div>
                            <div className="numbers">{orders.length}</div>
                            <div className="cardName">Số đơn đặt bàn</div>
                        </div>
                        <div className="iconBx">
                            <ion-icon name="eye-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">{khuyenMais.length}</div>
                            <div className="cardName">Số chương trình khuyến mãi</div>
                        </div>

                        <div className="iconBx">
                            <ion-icon name="cart-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <div className="numbers">284</div>
                            <div className="cardName">Comments</div>
                        </div>
                        <div className="iconBx">
                            <ion-icon name="chatbubbles-outline"></ion-icon>
                        </div>
                    </div>
                </div>

                {/* Order Details List  */}
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Danh sách đặt bàn</h2>
                            < Link to="/admin/order" className="btn">View All</Link>
                        </div>
                        <table>
                            <TableOrder
                                orders={orders}
                            />
                        </table>
                    </div>

                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Khách hàng tiềm năng</h2>
                        </div>
                        <table>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx"><img src={images.user} alt="" /></div>
                                </td>
                                <td>
                                    <h4>Đức Anh <br /> <span>0878764054</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx"><img src={images.user} alt="" /></div>
                                </td>
                                <td>
                                    <h4>Thiện Lương <br /> <span>0964698674</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx"><img src={images.user} alt="" /></div>
                                </td>
                                <td>
                                    <h4>người đặt 1 <br /> <span>0366444658</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="imgBx"><img src={images.user} alt="" /></div>
                                </td>
                                <td>
                                    <h4>random <br /> <span>0123456789</span></h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='container'>
                    <div className="header w-100  "> <h2 className='text-center'>Menu Item</h2></div>
                    <div className="content m-3 p-4 mt-2 mb-1 w-auto">
                        <ProductPreview />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard