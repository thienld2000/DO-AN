import React, { useState } from 'react';
import TableList from '../components/TableList';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [updateTableList, setUpdateTableList] = useState(false);

  const handleSelectTable = (table) => {
    setSelectedTable(table);
  };
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleBookingSuccess = () => {
    // Khi đặt bàn thành công, setUpdateTableList(true) để rerender TableList
    setUpdateTableList(true);
  };

  return (
    <div className="container border border-2 rounded">
      <h1 className="text-center my-4 text-warning">ĐẶT BÀN </h1>
      <div className="row justify-content-center my-5">
      <h2 className="text-center my-4 text-warning">Tìm kiếm bàn theo ngày</h2>
        <div className="col-md-3">
          <input
            className='form-control text-center '
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>
      <TableList
        onSelectTable={handleSelectTable}
        selectedDate={selectedDate}
        updateTableList={updateTableList}
      />
      {selectedTable && (
        <div>
          <div className="row justify-content-center">
            <div className="">
              <BookingForm
                selectedTable={selectedTable}
                onBookingSuccess={handleBookingSuccess}
              />
            </div>
          </div>
        </div>
      )}
    </div>


  );
};

export default Booking;
