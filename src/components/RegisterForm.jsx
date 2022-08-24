import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp, loginErrorClear } from '../features/user/userSlice';
import './form.css';

const RegisterForm = () => {
  const userExists = useSelector((state) => state.user.user);
  const userError = useSelector((state) => state.user.error);
  console.log(userExists);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const name = useRef('name');
  const email = useRef('email');
  const inputHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
      email: email.current.value
    };
    dispatch(signUp(user));
  };

  useEffect(() => {
    dispatch(loginErrorClear());
  }, []);

  useEffect(() => {
    if (userExists && userExists.success) {
      toast.success('User created successfully');
      nav('/');
    }
  }, [userExists]);

  useEffect(() => {
    if (userError && !userError.success) {
      toast.error(userError.error);
    }
  }, [userError]);

  return (
    <div className="form-container">
      <form onSubmit={inputHandler} className="main-form reg-form ">
        <input type="text" ref={name} placeholder="User Name" required />
        <input type="email" ref={email} placeholder="Email" required />
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
};

export default RegisterForm;
