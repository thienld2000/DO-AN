import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

const DeleteOrder = (props) => {
    const { show, setShow, dataDel } = props;
    const [formData, setFormData] = useState({});

    const handleClose = () => setShow(false);
    
    useEffect(() => {
        if (!_.isEmpty(dataDel)) {
            setFormData({
                _id: dataDel._id,
                name: dataDel.name,
                phone: dataDel.phone,
                datetime: dataDel.datetime.slice(0, 16),
            });
        }
    }, [dataDel]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const orderId = dataDel._id;
            const response = await fetch(`http://localhost:8000/api/order/${orderId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderItems: formData })
            });
            if (response.ok) {
                console.log(formData)
                await props.fetchListOrders();
                handleClose();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>  Delete Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa thông tin đặt bàn {dataDel && dataDel.datetime ? (
                    <>
                        <b>{dataDel.datetime.slice(0, 16)}</b> của khách hàng <b>{dataDel.name}</b> số điện thoại <b>{dataDel.phone}</b>
                    </>
                ) : (
                    "Không có thông tin"
                )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cannel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteOrder;