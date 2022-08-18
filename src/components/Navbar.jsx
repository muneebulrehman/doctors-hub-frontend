import React, { useState } from 'react';
import { NavLinks } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <p>Doctor&apos;s hub</p>
        {/* <p>Doctors hub</p> */}
        {menu ? (
          <p className={styles.closeBtn} onClick={() => toggleMenu()}>
            <AiOutlineClose />
          </p>
        ) : (
          <p className={styles.hamburger} onClick={() => toggleMenu()}>
            <GiHamburgerMenu />
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
