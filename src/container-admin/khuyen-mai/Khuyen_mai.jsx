import React, { useState, useEffect } from 'react';
import ProductPreview from '../../components/Product/ProductPreview';
import "./Khuyen_mai.css"
import CreateKhuyenmai from './Create_Khuyenmai';
import Update from './Update';
import Delete from './Delete';

const KhuyenMai = () => {
    const [khuyenMais, setKhuyenMais] = useState([]);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [dataUpdate, setDataUpdate] = useState([]);
    const [dataDel, setDataDel] = useState([]);

    const handleClickUpdate = (order) => {
        setShowUpdate(true);
        setDataUpdate(order);
    }
    const handleDelItem = (order) => {
        setShowDelete(true);
        setDataDel(order);
    }


    useEffect(() => {
        fetchListKhuyenmai();
    }, []);
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
        <div className="khuyen_mai_main">
            <h2 className="text-center">Khuyen_mai Item</h2>
            <div className="row">
                <CreateKhuyenmai fetchListKhuyenmai={fetchListKhuyenmai} />
            </div>
            <Update
                show={showUpdate}
                setShow={setShowUpdate}
                dataUpdate={dataUpdate}
                fetchListKhuyenmai={fetchListKhuyenmai}
            />
            <Delete
                show={showDelete}
                setShow={setShowDelete}
                dataDel={dataDel}
                fetchListKhuyenmai={fetchListKhuyenmai}
            />
            <div className="d-flex flex-wrap justify-content-center">
                {khuyenMais && khuyenMais.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <div className="card mx-1 my-2">
                            <img src={item.imageUrl} className="card-img-top mx-auto" alt="..." style={{ width: 300, height: 350 }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <div className="d-flex justify-content-end">
                                    <button onClick={() => handleClickUpdate(item)} className="btn btn-primary me-2">Edit</button>
                                    <button onClick={() => handleDelItem(item)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className=" mx-auto" style={{ maxWidth: '94%' }}>
                <ProductPreview style={{ height: '60vh' }} />
            </div>
        </div>
    );
};

export default KhuyenMai;
