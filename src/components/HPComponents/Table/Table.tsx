import React, { useRef } from 'react'
import Styles from '@/components/HPComponents/Table/Table.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const listTitle = [
  {
    name: 'Home'
  },
  {
    name: 'About'
  },
  {
    name: 'Price'
  },
  {
    name: 'Total'
  },
  {
    name: 'Total1'
  },
  {
    name: 'Total2'
  },
  {
    name: 'Total3'
  },
  {
    name: 'Total4'
  }
]
function Table() {
  const handelCopyToBoard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.dismiss()
    toast.clearWaitingQueue()
    toast.success('Đã copy')
  }

  return (
    <>
      <ToastContainer limit={1} autoClose={500} hideProgressBar pauseOnFocusLoss={false} />
      <div className={Styles.table}>
        <p className={Styles.title}>Name Table</p>
        <div className={Styles.tableHeader}>
          {listTitle.map((item) => (
            <div key={item.name} className={Styles.tableTH}>
              <p>{item.name} </p>
            </div>
          ))}
        </div>
        <div className={Styles.tableBody}>
          <div className={Styles.tableTR}>
            {listTitle.map((item) => (
              <div key={item.name} className={Styles.tableTD}>
                <p>{item.name} </p>
              </div>
            ))}
          </div>
          <div className={Styles.tableTR}>
            {listTitle.map((item) => (
              <div
                key={item.name}
                className={Styles.tableTD}
                onClick={() => handelCopyToBoard(item.name)}
              >
                <p>{item.name} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
