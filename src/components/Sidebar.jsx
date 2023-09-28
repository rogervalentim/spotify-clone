import { BiHomeAlt } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'

import { BiLibrary } from 'react-icons/bi'

import { Globe } from 'lucide-react'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <section className="sidebar-inicio">
      <ul className="sidebar-inicio-links">
       <li className='home-icon'><BiHomeAlt className='library-icon' fontSize="25"/><a href="#">  Início  </a></li>
       <li className="li-inicio"> <FiSearch fontSize="25" /> <a href="#"> Procurar </a></li>
      </ul>
    </section>
    <section className="sidebar-biblioteca">
      <div className="sidebar-biblioteca-links">
        <div className='box-library'>
          <p className='library-icon'><BiLibrary  fontSize="25"/></p>
          <a href="#">A tua Biblioteca</a>
          <p className='plus-icon'><BsPlusLg fontSize="20" /></p>
        </div>
       </div>

       <section className="cards-library">
       <div className="card-library">
         <div className="card-library-position">
        <p className="card-library-text"><strong>Cria a tua primeira playlist</strong></p>
        <p className="card-library-text-2">É fácil, nós ajudamos</p>

        <button><strong>Criar playlist</strong></button>
        </div>
       </div>
       <div className="card-library-1">
         <div className="card-library-position">
        <p className="card-library-text"><strong>Vamos lá encontrar alguns<br></br>
        podcasts para seguires</strong></p>
        <p className="card-library-text-2">Vamos atualizar-te sobre os novos <br></br>
        epsódios</p>

        <button><strong>Procurar podcasts</strong></button>
        </div>
       </div>
       </section>

      <div className="links-content">
       <a href="#" className="cookies">Cookies</a>
       <button><Globe className="globe" /> Português</button>
       </div>
    </section>
    </>
  )
}

export default Sidebar