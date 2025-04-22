import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../reduxt-toolkit/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Logout = () => {
     const navigate=useNavigate();
    const dispatch=useDispatch();
 const Logout=()=>{
     dispatch(logout());
      navigate('/');
 }
       
  return (
    <div onClick={Logout}>Logout</div>
  )
}

export default Logout