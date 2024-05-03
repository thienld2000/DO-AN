  import React, { useState } from 'react';
  import { ToastContainer, toast } from 'react-toastify'

  const XacNhan = ({ email }) => {
    const [confirmationCode, setConfirmationCode] = useState('');
    const [message, setMessage] = useState('');
    console.log(email)
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!confirmationCode) {
        setMessage('Please enter confirmation code.');
        return;
      }
      try {
        const response = await fetch('http://localhost:8000/api/order/confirm-booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, confirmationCode }),
        });

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
          toast.success('Đặt bàn thành công!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        } else {
          setMessage('Failed to confirm booking. Please try again.');
        }
      } catch (error) {
        setMessage('Failed to confirm booking. Please try again.');
      }
    };

    return (
      <>
        <h2 className="text-warning text-center">Điền mã xác nhận</h2>
        <div className=' '>
          
          <form className='d-flex justify-content-center ' onSubmit={handleSubmit}>
            <input className='rounded border border-primary mx-4 ' type="text" placeholder="Nhập mã xác nhận" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} required />
            <button className="btn btn-outline-primary " type="submit">Xác nhận</button>
          </form>
          <p>{message}</p>
          <div className="toast-container">
                <ToastContainer />
              </div>
        </div>
      </>
      
      
    );
  };

  export default XacNhan;