import React from 'react'
import './Order.css'
import CreateOrder from './CreateOrder'
import { useState, useEffect } from 'react'
import TableOrder from './TableOrder'
import UpdateOrder from './UpdateOrder'
import DeleteOrder from './DeleteOrder'
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
	const [orders, setOrders] = useState([]);
	const [showUpdate, setShowUpdate] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [dataUpdate, setDataUpdate] = useState({});
	const [dataDel, setDataDel] = useState({});
	const [searchPhone, setSearchPhone] = useState('');
    const [searchDate, setSearchDate] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [tables, setTables] = useState([]); 
	
	const handleSearch = () => {
		const filterOrder = orders.filter((order) => {
            const matchesPhone = order.phone === searchPhone || searchPhone === '';
            const searchDateTime = new Date(searchDate);
        const orderDateTime = new Date(order.datetime);
        const matchesDate = searchDate === '' || orderDateTime.toISOString().slice(0, 10) === searchDateTime.toISOString().slice(0, 10);
        return matchesPhone && matchesDate;
        });
        setSearchResults(filterOrder);
        console.log(filterOrder);
	};
	

	const handleClickbUpdate = (order) => {
		setShowUpdate(true);
		setDataUpdate(order);
	}
	const handleDelItem = (order) => {
		setShowDelete(true);
		setDataDel(order);
	}
	useEffect(() => {
		fetchListOrders();
		fetchTables();
	}, [orders]);

	const fetchListOrders = async () => {
		try {
		  const response = await fetch('http://localhost:8000/api/order/orders');
		  if (response.ok) {
			const data = await response.json();
			// Populate the 'table' field
			setOrders(data.map(order => ({ ...order,table: { _id: order.table._id, name: order.table.name, floor: order.table.floor  } })));
		  }
		} catch (error) {
		  console.error('Error fetching order list:', error);
		}
	  };
	  const fetchTables = async () => {
		try {
		  const response = await fetch('http://localhost:8000/api/table/available');
		  if (response.ok) {
			const data = await response.json();
			setTables(data); // Lưu danh sách tables vào state
		  }
		} catch (error) {
		  console.error('Error fetching tables:', error);
		}
	  };
	return (
		<>
			<div className="table-responsive">
				<h1 className="text-center text-warning my-3">QUẢN LÝ ĐẶT BÀN</h1>
				<div className=" row justify-content-center search input-group mb-3 me-4 ms-4 pe-5 ">
					<input
						type="text"
						className="form-control col-3 mx-2"
						placeholder="Search..."
						aria-label="Search input"
						aria-describedby="button-addon"
						value={searchPhone}
						onChange={(e) => setSearchPhone(e.target.value)}
					/>
					<input
                        type="date"
                        className="form-control col-3 mx-2"
                        placeholder="Search by date..."
                        aria-label="Date input"
                        aria-describedby="button-addon"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
					<button
						className="btn btn-outline-secondary col-1"
						type="button"
						id="button-addon"
						onClick={handleSearch}
					>
						<i className="bi bi-search"></i>
					</button>
				</div>
				<div className="table-wrapper">
					<div className="table-title">
						<div className="row">
							<div className="col-sm-6">
								<h2>QUẢN LÝ<b>ĐẶT  BÀN</b></h2>
							</div>
							<div className="col-sm-6">
								<CreateOrder fetchListOrders={fetchListOrders} />
							</div>
						</div>
					</div>
					<TableOrder
						searchResults={searchResults}
						orders={orders}
						handleClickUpdate={handleClickbUpdate}
						handleDelItem={handleDelItem}
						fetchListOrders={fetchListOrders}
						className="border border-5 border-secondary"
					/>
					<div className="clearfix">
						<UpdateOrder
							show={showUpdate}
							setShow={setShowUpdate}
							dataUpdate={dataUpdate}
							fetchListOrders={fetchListOrders}
							tables={tables} 
						/>
						<DeleteOrder
							show={showDelete}
							setShow={setShowDelete}
							dataDel={dataDel}
							fetchListOrders={fetchListOrders}
						/>
						<div className="hint-text">Showing <b>{orders.length}</b> out of <b>{orders.length}</b> entries</div>
							<ul className="pagination">
								<li className="page-item disabled"><a href="/">Previous</a></li>
								<li className="page-item active"><a href="/" className="page-link">1</a></li>
								<li className="page-item"><a href="/" className="page-link">2</a></li>
								<li className="page-item "><a href="/" className="page-link">3</a></li>
								<li className="page-item"><a href="/" className="page-link">Next</a></li>
							</ul>
					</div>
				</div>
			</div >
		</>
	)
}

export default Order