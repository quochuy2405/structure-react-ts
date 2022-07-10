import { Footer, Header } from '@/components'
import Styles from '@/styles/page/Admin.module.scss'
const Admin = (): JSX.Element => {
  return (
    <div className={Styles.admin}>
      <Header />

      <Footer />
    </div>
  )
}

export default Admin
