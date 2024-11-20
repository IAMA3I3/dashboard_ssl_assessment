import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import '@fontsource/crete-round'
import '@fontsource/inter'
import Navbar from "./components/Navbar"
import Dashboard from "./screens/Dashboard"
import Topbar from "./components/Topbar"
import ReactGA from "react-ga4"
import AnalyticsTracker from "./components/AnalyticsTracker"

const App = () => {

  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  useEffect(() => {
    ReactGA.send("pageview"); // Sends pageview for the current page
  }, []);

  return (
    <BrowserRouter>
    <AnalyticsTracker />

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