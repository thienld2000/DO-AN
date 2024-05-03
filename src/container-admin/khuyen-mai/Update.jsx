import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

function Update(props) {
	const {show, setShow, dataUpdate } = props;
	const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        endDate: '',
        startDate: '',
        discount: '',
    });

    const formatDate = (dateString) => {
        const inputDate = new Date(dateString);
        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Thêm 1 vì tháng bắt đầu từ 0
        const day = String(inputDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect( () => {
        if(!_.isEmpty(dataUpdate)){
            console.log(dataUpdate._id)
            setFormData({
                name:(dataUpdate.name),
                description: (dataUpdate.description),
                imageUrl: (dataUpdate.imageUrl),
                endDate: formatDate(dataUpdate.endDate),
                startDate: formatDate(dataUpdate.startDate),
                discount: (dataUpdate.discount),
            });
        }
    },[dataUpdate])

	const handleClose = () => {
        setShow(false)
        setFormData({
            name: '',
            description: '',
            imageUrl: '',
            endDate: '',
            startDate: '',
            discount: '',
        });
    }

	const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            const khuyenmaiID = dataUpdate._id ;
			const response = await fetch(`http://localhost:8000/api/khuyen_mai/${khuyenmaiID}`, {
				method: 'PUT',
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
			<Modal show={show} onHide={handleClose} backdrop="static" size="xl">
				<Modal.Header closeButton>
					<Modal.Title>Update Sales</Modal.Title>
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
export default Update;