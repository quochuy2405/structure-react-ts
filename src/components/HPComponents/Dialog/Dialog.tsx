import React, { useState } from 'react'
import Styles from '@/components/HPComponents/Dialog/Dialog.module.scss'
function Dialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        style={{ position: 'absolute', zIndex: '1000' }}
        className="click"
        onClick={() => setOpen((e) => !e)}
      >
        <button>Click</button>
      </div>
      <div className={`${Styles.overLay}  ${open && Styles.open}`}></div>
      <div className={`${Styles.dialog} ${!open && Styles.close} ${open && Styles.open}`}></div>
    </>
  )
}

export default Dialog
