import React from 'react';
import './Booking.css';

const Booking = () => {
  return (
    <>
      <div className="container">
        <h1 className='header'>Đặt bàn - Yakimono</h1>
        <form action="#" method="POST">
          <label htmlFor="name">Họ và tên:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Số điện thoại:</label>
          <input type="tel" id="phone" name="phone" required />
          <label>Set lẩu </label>
          <select className="form-select" aria-label="Default select example" >
            <option value="buffetneko349k">Buffet Neko 349k</option>
            <option value="buffettanuki299k">Buffet Tanuki 299k</option>
            <option value="buffetgodzilla239k">Buffet Godzilla 239k</option>
          </select>

      <label htmlFor="date">Ngày đặt:</label>
      <input type="date" id="date" name="date" required />

      <label htmlFor="time">Thời gian:</label>
      <input type="time" id="time" name="time" required />

      <label htmlFor="guests">Số lượng khách:</label>
      <input type="number" id="guests" name="guests" min="1" required />
      <label htmlFor="note">Ghi chú yêu cầu </label>
      <input type="text" id="note" name="note" required />

      <button type="submit">Đặt bàn</button>
    </form >
    </div >
    </>
    )
}

export default Booking;