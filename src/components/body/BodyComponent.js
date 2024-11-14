import { Route, Routes } from "react-router";
import Home from "./Home"
import Menu from './Menu'
import Contact from './Contact'
import About from './About'

const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Redirect from="/" to="/home" /> */}
      </Routes>
    </div>
  )
}

export default BodyComponent