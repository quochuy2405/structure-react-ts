/* eslint-disable @next/next/no-img-element */
import React from 'react'
import notfound from '/image/error_404.svg'
import Styles from '@/styles/page/Page404.module.scss'
import { Metadata } from '@/components'
import { Link } from 'react-router-dom'
function Page404() {
  return (
    <>
      <Metadata title="Khóa học - Ms.Quynh" description="Khóa học - Ms.Quynh" />
      <div className={Styles.page404}>
        <img src={notfound} alt="notfound" className={Styles.img404} />
        <div className={Styles.boxNotice}>
          <p className={Styles.notice}>Oops! This Page is Not Found.</p>
          <Link to={'/'}>
            <div className={Styles.buttonGoHome}>Back to home</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page404
