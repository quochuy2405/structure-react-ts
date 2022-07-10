import React from 'react'
import Styles from './Header.module.scss'
import logo from '/image/logo.png'
import { BsSearch } from 'react-icons/bs'
import { TbMail } from 'react-icons/tb'
import { IoNotificationsCircle } from 'react-icons/io5'

const Header = (): JSX.Element => {
  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <img src={logo} alt="logo" />
        <p>NAME</p>
      </div>
      <div className={Styles.fsInfoAccount}>
        <div className={Styles.search}>
          <BsSearch size={18} />
          <input type="text" placeholder="Search..." />
        </div>
        <div className={Styles.accountInfo}>
          <IoNotificationsCircle />
          <TbMail />
          <div className={Styles.avataUser}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
