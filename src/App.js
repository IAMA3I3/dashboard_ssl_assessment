import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import '@fontsource/crete-round'
import '@fontsource/inter'
import Navbar from "./components/Navbar"
import Dashboard from "./screens/Dashboard"
import Topbar from "./components/Topbar"

const App = () => {

  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <BrowserRouter>

      <div className=" relative w-full min-h-screen block md:flex">

        <Navbar openNav={openNav} toggleNav={toggleNav} />

        <div className=" flex-1 h-screen overflow-y-auto scrollbar">
          <Topbar toggleNav={toggleNav} />

          <Routes>
            <Route element={<Dashboard />} path="/" />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}

export default App