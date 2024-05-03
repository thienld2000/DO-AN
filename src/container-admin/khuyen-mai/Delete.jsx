import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

const Delete = (props) => {
    const { show, setShow, dataDel } = props;
    const [formData, setFormData] = useState({});

    const handleClose = () => setShow(false);
    
    useEffect(() => {
        if (!_.isEmpty(dataDel)) {
            setFormData({
                name:(dataDel.name),
                imageUrl: (dataDel.imageUrl),
                endDate: (dataDel.endDate),
                startDate: (dataDel.startDate),
            });
        }
    }, [dataDel]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const khuyenmaiID = dataDel._id;
            const response = await fetch(`http://localhost:8000/api/khuyen_mai/${khuyenmaiID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log(formData)
                await props.fetchListKhuyenmai();
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
                    <Modal.Title>  Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa thông tin khuyến mãi {dataDel && dataDel.name ? (
                    <>
                      <b>{dataDel.startDate.slice(0, 16)}</b> <b>{dataDel.endDate}</b>  <b>{dataDel.phone}</b>
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

export default Delete;