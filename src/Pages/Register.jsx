import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const createUserResponse = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    password: data.password,
                    phonenumber: data.phone,
                    isAdmin: false

                })
            });
            if (createUserResponse.ok) {
                const { token } = await createUserResponse.json();
                // Lưu token JWT vào sessionStorage
                sessionStorage.setItem('Auth token', token);
                toast.success('Account created successfully!🎉', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
                navigate('/login');
            } else {
                const responseData = await createUserResponse.json();
                if (responseData.error && responseData.error.code === 400) {

                    toast.error('Email Already In Use')
                } else {
                    console.log(responseData);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div class="container w-50 mt-4 p-3 rounded bg-success text-light">
    <h5 class="fs-1 text-center">Đăng ký</h5>
    <form class="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
            <label for="name" class="form-label fs-5 fw-medium">Họ và tên</label>
            <input {...register('name', { required: true })} id="name" type="text" class="form-control" />
            {errors.name && <div class="text-danger">Name is required</div>}
        </div>
        <div class="mb-3">
            <label for="email" class="form-label fs-5 fw-medium">Email</label>
            <input {...register('email', { required: true })} id="email" type="email" class="form-control" />
            {errors.email && <div class="text-danger">Email is required</div>}
        </div>
        <div class="mb-3">
            <label for="password" class="form-label fs-5 fw-medium">Mật khẩu</label>
            <input {...register('password', { required: true })} id="password" type="password" class="form-control" />
            {errors.password && <div class="text-danger">Password is required</div>}
        </div>
        <div class="mb-3">
            <label for="confirmPassword" class="form-label fs-5 fw-medium">Xác nhận mất khẩu</label>
            <input {...register('confirmPassword', { required: true })} id="confirmPassword" type="password" class="form-control" />
            {errors.confirmPassword && <div class="text-danger">Confirm Password is required</div>}
        </div>
        <div class="mb-3">
            <label for="phone" class="form-label fs-5 fw-medium">Số điện thoại</label>
            <input {...register('phone', { required: true })} id="phone" type="text" class="form-control" />
            {errors.phone && <div class="text-danger">Phone Number is required</div>}
        </div>

        <button type="submit" class="btn btn-primary btn-lg w-100">{loading ? "Loading" : 'Đăng ký'}</button>
    </form>
    <ToastContainer />
</div>
    )
}

export default Register;
