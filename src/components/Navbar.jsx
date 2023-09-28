import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="arrows-section">
      <div className="arrow-container">
        <ChevronLeft />
      </div>
      <div className="arrow-container-1">
      <ChevronRight  />
      </div>
      </div>

      <div className="nav-links">
        <a href="#">
          Regista-te
        </a>

        <button><strong>Iniciar sessão</strong></button>
      </div>
    </nav>
  )
}

export default Navbar