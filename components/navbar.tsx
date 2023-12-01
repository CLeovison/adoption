import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Logo from '../public/assets/AdoptLogo.png'


export default function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navlogo}>
        <Image src={Logo} alt='Stray Pets Logo' className={styles.navimg}/>
        </div>
        <ul className={styles.navlist}>
            <li className={styles.navitems}><a href="#" className={styles.navlinks}>Home</a></li>
            <li className={styles.navitems}><a href="#" className={styles.navlinks}>About</a></li>
            <li className={styles.navitems}><a href="#" className={styles.navlinks}>Pets</a></li>
            <li className={styles.navitems}><a href="#" className={styles.navlinks}>FAQ's</a></li>
        </ul>
      </nav>
    )
  }