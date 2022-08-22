import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImTwitter, ImFacebook, ImGooglePlus, ImVimeo, ImPinterest } from 'react-icons/im';
import styles from './Navbar.module.css';
import { userLogout } from '../features/user/userSlice';

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userLoggedIn = useSelector((state) => state.user.user);
  const [user, setUser] = useState('null');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setUser(userLoggedIn);
  }, [userLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setUser(localStorage.getItem('username'));
    } else setUser('');
  }, [user]);

  const logout = () => {
    nav('/');
    setUser('');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    dispatch(userLogout());
  };

  if (menu) {
    return (
      <p className={styles.hamburger} onClick={() => toggleMenu()}>
        <GiHamburgerMenu />
      </p>
    );
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <p>Doctor&apos;s hub</p>
        <p className={styles.closeBtn} onClick={() => toggleMenu()}>
          <BiLeftArrow />
        </p>
      </div>
      <div className={styles.navlinks}>
        <NavLink to="/">Doctors</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/create-appointment">Reserve appointment</NavLink>
        {!user ? (
          <>
            <NavLink to="/login">LOG IN</NavLink>
            <NavLink to="/register">SIGN UP</NavLink>
          </>
        ) : (
          ''
        )}
      </div>
      <div className={styles.footer}>
        {user ? (
          <button type="button" className={styles.logoutbtn} onClick={logout}>
            Logout
          </button>
        ) : (
          ''
        )}

        <div className={styles.icons}>
          <span>
            <ImTwitter />
          </span>
          <span>
            <ImFacebook />
          </span>
          <span>
            <ImGooglePlus />
          </span>
          <span>
            <ImVimeo />
          </span>
          <span>
            <ImPinterest />
          </span>
        </div>
        <div className={styles.footerText}>
          <p>&copy 2022 Max hospitals group </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
