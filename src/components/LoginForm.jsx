import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, userErrorClear } from '../features/user/userSlice';
import './form.css';

const LoginForm = () => {
  const userExists = useSelector((state) => state.user.user);
  const loginError = useSelector((state) => state.user.loginError);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const name = useRef('');

  const inputHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value
    };
    dispatch(login(user));
  };

  useEffect(() => {
    dispatch(userErrorClear());
  }, []);

  useEffect(() => {
    if (loginError) toast.error(loginError);
  }, [loginError]);

  useEffect(() => {
    if (userExists && userExists.success) {
      toast.success('User logged in successfully');
      nav('/');
      localStorage.setItem('username', userExists.user.username);
      localStorage.setItem('user_id', userExists.user.id);
    }
  }, [userExists]);

  return (
    <div className="form-container">
      <form onSubmit={inputHandler} className="main-form login-form">
        <input type="text" ref={name} placeholder="User Name" required />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};

export default LoginForm;
