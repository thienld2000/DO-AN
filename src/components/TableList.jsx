import React, { useState, useEffect } from 'react';

const TableList = ({ onSelectTable, selectedDate, updateTableList }) => {
  const [tables, setTables] = useState([]);
  const [tableStatus, setTableStatus] = useState({});
  const [filteredTables, setFilteredTables] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState('lunch');

  const handleFloorClick = (floorNumber) => {
    setSelectedFloor(floorNumber);
  };
  const handleTimeOfDayChange = (time) => {
    setSelectedTimeOfDay(time);
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/table/available')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setTables(data);
        setFilteredTables(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [updateTableList]);

  useEffect(() => {
    const fetchTableStatus = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/table/status?date=${selectedDate}&timeOfDay=${selectedTimeOfDay}`);
        if (!response.ok) {
          throw new Error('Failed to fetch table status');
        }
        const data = await response.json();
        setTableStatus(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTableStatus();
  }, [selectedDate, selectedTimeOfDay]);


  useEffect(() => {
    const filteredTablesByFloor = tables.filter(table => table.floor === selectedFloor);
    setFilteredTables(filteredTablesByFloor);
  }, [selectedFloor, tables, selectedTimeOfDay]);

  const renderTable = (table) => {
    const isBooked = tableStatus[table._id] === 'booked';
    return (
      <div key={table._id} className="col-md-3">
        <button
          className={`btn mx-4 p-2 my-2 ${isBooked ? 'btn-outline-secondary disabled' : 'btn-outline-primary'}`}
          onClick={() => onSelectTable(table)}
          disabled={isBooked}
        >
          {table.name} - ({table.capacity} người)
        </button>

        {isBooked && (
          <span className="text-muted"> - Booked on {selectedDate}</span>
        )}
      </div>
    );
  };

  return (
    <div className="container border border-1 border-primary rounded">
      <h2 className='text-center text-warning mb-4'>Chọn bàn để đặt</h2>

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center"> {/* Thay thế col-6 bằng col-md-6 để tự động điều chỉnh kích thước theo kích thước màn hình */}
          <button className="btn btn-outline-danger" onClick={() => handleFloorClick(1)}>Floor 1</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center"> {/* Thay thế col-6 bằng col-md-6 để tự động điều chỉnh kích thước theo kích thước màn hình */}
          <button className="btn btn-outline-danger" onClick={() => handleFloorClick(2)}>Floor 2</button>
        </div>
      </div>
      <div className="row mt-3 ms-4">
        <div className="col-12 d-flex justify-content-center">
          <button className={`btn btn-outline-info mx-2 ${selectedTimeOfDay === 'lunch' ? 'active' : ''}`} onClick={() => handleTimeOfDayChange('lunch')}>Ăn Trưa</button>
          <button className={`btn btn-outline-info mx-2 ${selectedTimeOfDay === 'dinner' ? 'active' : ''}`} onClick={() => handleTimeOfDayChange('dinner')}>Ăn Tối</button>
        </div>
      </div>
      <div className="row mt-3 ms-4">
        {filteredTables.map(table => renderTable(table))}
      </div>
    </div>

  );
};

export default TableList;
