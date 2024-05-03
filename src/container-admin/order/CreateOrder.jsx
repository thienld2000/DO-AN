import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Booking from '../../Pages/Booking';

function CreateOrder(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='btn btn-primary d-grid gap-2 col-3 mx-auto h-100' onClick={handleShow}>
                Thêm mới bàn đặt
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title> Thêm mới bàn đặt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Booking
                        onBookingSuccess={() => {
                            handleClose();
                            props.fetchListOrders();
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateOrder;
