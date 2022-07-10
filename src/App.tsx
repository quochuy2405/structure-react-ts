import { Navigate, Route, Routes } from 'react-router-dom'
import { Admin, Page404, Test } from './page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/:slug" element={<Admin />} />
        <Route path="/admin/:slug/:opt" element={<Admin />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
