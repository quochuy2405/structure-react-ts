import React from 'react'
import Styles from '@/components/Footer/Footer.module.scss'

function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.teamOfUser}>
        <p>Privacy Policy</p>
        <p>Term of Use</p>
      </div>
      <div className={Styles.copyRight}>
        <p>© 2022 Ecommercer UHPN, Made with ❤ by UHPN Design</p>
      </div>
    </div>
  )
}

export default Footer
