import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser,setIsAdmin  } from '../stores/user/authSlice';
import "./Login.css"


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const authError = useSelector(state => state.auth.error);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      dispatch(loginUser(data)).then((response) => {
        const isAdmin = response.payload.isAdmin;
        if(isAdmin){
          dispatch(setIsAdmin(isAdmin));
          navigate('/admin');
        }else{
          navigate('/')
        }
      });
      toast.success('Logged in successfully! 🎉', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

    } catch (error) {
      toast.error(`Login failed: ${error.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-3 rounded-xl z-10 mx-auto mt-5">
      <div class="custom-form">
      <h5 className="fs-1">Đăng nhập</h5>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label fs-5 fw-medium text-light">Nhập Email</label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label fs-5 fw-medium text-light">Mật khẩu</label>
          <input
            {...register('password')}
            id="password"
            type="password"
            className="form-control"
            required
          />
        </div>
        <div className="">
          <button type="submit" className="btn btn-primary btn-lg w-100 mx-auto">{loading ? "loading" : 'Login'}</button>
        </div>
       
        {authError && <p className="text-danger">{authError}</p>}
      </form>
      <ToastContainer />
      </div>
    </div>

  )
}

export default Login;
