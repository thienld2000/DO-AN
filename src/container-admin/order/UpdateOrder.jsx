import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

function UpdateOrder(props) {
    const { show, setShow, dataUpdate, tables } = props;
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            setMenu: 'Buffet Neko 349k',
            datetime: '',
            guests: 1,
            note: '',
            timeOfDay: '',
            confirmationCode: 1,
            isConfirmed: false
        }
    );
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            console.log(dataUpdate.table._id)
            setFormData({
                _id: (dataUpdate._id),
                name: (dataUpdate.name),
                email: (dataUpdate.email),
                phone: (dataUpdate.phone),
                setMenu: (dataUpdate.setMenu),
                datetime: (dataUpdate.datetime.slice(0, 16)),
                guests: (dataUpdate.guests),
                note: (dataUpdate.note),
                isConfirmed: (dataUpdate.isConfirmed),
                table: dataUpdate.table._id,
            });
        }
    }, [dataUpdate])

    const handleClose = () => {
        setShow(false)
        setFormData(
            {
                name: '',
                email: '',
                phone: '',
                setMenu: 'Buffet Neko 349k',
                datetime: '',
                guests: 1,
                note: '',
                timeOfDay: '',
                confirmationCode: 1,
                isConfirmed: false
            }
        );
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "datetime") {
            const newTimeOfDay = getTimeOfDay(value);
            setFormData(prevFormData => ({
                ...prevFormData,
                timeOfDay: newTimeOfDay
            }));
        }

    };
    const getTimeOfDay = (datetime) => {
        const selectedDateTime = new Date(datetime);
        const hours = selectedDateTime.getHours();

        // Giả sử ăn trưa từ 11:00 đến 16:00, ăn tối từ 16:00 trở đi
        if (hours >= 11 && hours < 16) {
            return 'lunch';
        } else {
            return 'dinner';
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const orderId = dataUpdate._id;
            const response = await fetch(`http://localhost:8000/api/order/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
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
            <Modal show={show} onHide={handleClose} backdrop="static" size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhập đặt bàn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='form-submit' onSubmit={handleSubmit}>
                        <div className="row my-3">
                            <div className="col">
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Họ và tên" required />
                            </div>
                            <div className="col">
                                <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Điện thoại" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        </div>

                        <div className="row my-3">
                            <div className="col-5">
                                Set lẩu
                                <select className="form-select" name="setMenu" value={formData.setMenu} onChange={handleChange}>
                                    <option value="buffetneko349k">Buffet Neko 349k</option>
                                    <option value="buffettanuki299k">Buffet Tanuki 299k</option>
                                    <option value="buffetgodzilla239k">Buffet Godzilla 239k</option>
                                    <option value="Chọn sau">Chọn sau</option>
                                </select>
                            </div>
                            <div className="col-5">
                                Khung giờ
                                <input type="datetime-local" className="form-control" name="datetime" value={formData.datetime} onChange={handleChange} required />
                            </div>
                            <div className="col-2">
                                Số khách
                                <input type="number" className="form-control" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" name="note" value={formData.note} onChange={handleChange}
                                placeholder="Ghi chú yêu cầu" />
                        </div>
                        <div className="mb-3">
                        <select className="form-select" name="isConfirmed" value={formData.isConfirmed} onChange={handleChange}>
                                    <option value="true">Đã xác nhận</option>
                                    <option value="false">Chưa xác nhận</option>
                                </select>
                        </div>

                        <label>Bàn </label>
                        <select
                            className="form-select"
                            aria-label="Default select UpdateOrder"
                            name="table"
                            value={formData.table}
                            onChange={handleChange}
                        >
                            {tables.map((table) => (
                                <>
                                    <option key={table._id} value={table._id}>
                                        {table.name} - tầng  {table.floor}
                                    </option>
                                </>
                            ))}
                        </select>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateOrder;