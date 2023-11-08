import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"

import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = ({logout}) => {
  return (
    <nav>
      <div className="arrows-section">
      <Link to="/">
      <div className="arrow-container">
        <ChevronLeft />
      </div>
      </Link>
      <div className="arrow-container-1">
      <ChevronRight  />
      </div>
      </div>

      <div className="nav-links">
        <button className="btn-premium "><strong>Ver planos Premium</strong></button>
        <button className="btn-logout" onClick={logout}>logout</button>
      </div>
    </nav>
  )
}

export default Navbar