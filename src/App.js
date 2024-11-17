import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./screens/Dashboard"
import Topbar from "./components/Topbar"

const App = () => {

  return (
    <BrowserRouter>

      <div className=" relative w-full min-h-screen block md:flex">
        <Navbar />
        <div className="">
          <Topbar />

          <Routes>
            <Route element={<Dashboard />} path="/" />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App