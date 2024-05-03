  import React, { useState } from 'react';
  import { ToastContainer, toast } from 'react-toastify'
  import { useEffect } from 'react';
  import XacNhan from "../Pages/XacNhan"

  const BookingForm = ({ selectedTable, onBookingSuccess  }) => {
      const [showConfirmModal, setShowConfirmModal] = useState(false);
      const [dataEmail, setDataEmail] = useState('');
      const [formData, setFormData] = useState(
        {
          name: '',
          email: '',
          phone: '',
          setMenu: 'Buffet Neko 349k',
          datetime: '',
          guests: 1,
          note: '',
          table: selectedTable ? selectedTable._id : '',
          visitDate: "",
          timeOfDay: '',
          confirmationCode: 1,
          isConfirmed: false
        }
      );
    
    const confirmationCode = Math.floor(100000 + Math.random() * 900000); 
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      if (name === "datetime") {
        const newTimeOfDay = getTimeOfDay(value);
        setFormData(prevFormData => ({
          ...prevFormData,
          timeOfDay: newTimeOfDay
        }));
      }if (name === "email") {
        setDataEmail(value);
    }
      
    };
    useEffect(() => {
      const updateTimeOfDay = () => {
        const newTimeOfDay = getTimeOfDay(formData.datetime);
        setFormData(prevFormData => ({
          ...prevFormData,
          timeOfDay: newTimeOfDay
        }));
      };

      updateTimeOfDay();
    }, [formData.datetime]);

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
      const selectedDate = new Date(formData.datetime);
      const currentDate = new Date();
    
     
      if (selectedDate < currentDate) {
        alert('Vui lòng chọn ngày trong tương lai!');
        return;
      }
      try {
      
        console.log(confirmationCode)
        console.log(formData)
        console.log(selectedDate.toISOString().split('T')[0], )
        const response = await fetch('http://localhost:8000/api/order/create-orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            visitDate: selectedDate.toISOString().split('T')[0], 
            isConfirmed: false,
            confirmationCode: confirmationCode
          }),
        });
      
        if (response.ok) {
          setShowConfirmModal(true);
          onBookingSuccess(); 
          const data = await response.json();
          console.log(data);
          toast.success('Vui lòng nhập mã xác nhận đặt bàn!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setFormData(
            {
              name: '',
              email: '',
              phone: '',
              setMenu: 'Buffet Neko 349k',
              datetime: '',
              guests: 1,
              note: '',
              table: selectedTable ? selectedTable._id : '',
              visitDate: selectedDate ? selectedDate.toISOString().split('T')[0] : "",
              timeOfDay: '',
              confirmationCode: 1, 
              isConfirmed: false 
            } 
          );
        }
      } catch (error) {
        console.error(error);
        toast.error('Đặt bàn thất bại!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    };
    
    return (
      <>
        <div className='booking'>
          <div className="container w-50 rounded border border-primary my-5 mx-6 bg-white ">
            <h1 className='text-center my-4 text-warning '>Đặt bàn</h1>
            {selectedTable && (
              <>
              <h4 className='text-center my-4 text-warning '>Tầng số: {selectedTable.floor}</h4>
                <h4 className='text-center my-4 text-warning '>Bàn số: {selectedTable.name}</h4>
              </>
              )}
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
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email"  />
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
              <div className="d-flex justify-content-center align-items-center mb-3">
                <button type="submit" className="btn btn-outline-danger">Đặt bàn ngay</button>
              </div>
            
            </form>
            <div className="toast-container">
              <ToastContainer />
            </div>
           
             {showConfirmModal && <XacNhan email={dataEmail} /> }
          </div>
        </div>
      </>
    )
  }

  export default BookingForm;