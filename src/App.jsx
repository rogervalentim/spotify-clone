import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Musics from './views/Musics'

import "./App.css"

const App = () => {
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

export default App