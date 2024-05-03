import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateKhuyenmai(props) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        endDate: '',
        startDate: '',
        discount: '',
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedEndDate = new Date(formData.endDate);
        const selectedStartDate = new Date(formData.startDate);

        if (selectedEndDate < selectedStartDate) {
            alert('Vui lòng chọn ngày kết thúc lớn hơn ngày khởi tạo!');
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/api/khuyen_mai/create_khuyen_mai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                await props.fetchListKhuyenmai();
                setFormData({
                    name: '',
                    description: '',
                    imageUrl: '',
                    endDate: '',
                    startDate: '',
                    discount: '',
                });
                handleClose();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Button className='btn btn-primary d-grid gap-2 col-3 mx-auto h-100' onClick={handleShow}>
                Add new Sale
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Add new sale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="needs-validation">
                        <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Product Name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Description"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                placeholder="Image URL"
                                required
                            />
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <label className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input
                                type="text"
                                className="form-control"
                                name="discount"
                                value={formData.discount}
                                onChange={handleChange}
                                placeholder="Discount"
                                required
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default CreateKhuyenmai;