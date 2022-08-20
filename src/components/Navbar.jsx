import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { AiOutlineClose } from 'react-icons/ai';
import { BiLeftArrow } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImTwitter, ImFacebook, ImGooglePlus, ImVimeo, ImPinterest } from 'react-icons/im';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
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
      </div>
      <div className={styles.footer}>
        <button className={styles.logoutbtn}>Logout</button>
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
