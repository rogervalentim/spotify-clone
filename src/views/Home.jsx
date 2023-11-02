import React from 'react'

import Musics from './Musics'
import { Sidebar, Navbar, Footer } from '../components/index'

const Home = () => {
  return (
    <>
    <section className="container-principal">
    <aside>
      <Sidebar />
    </aside>
    <main className="main-container">
      <Navbar />
      <Musics />
    </main>
    </section>
    <Footer />
    </>
    )
}

export default Home