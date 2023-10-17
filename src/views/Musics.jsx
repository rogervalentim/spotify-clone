import React from 'react'
import Card from '../components/Card'
import { singles } from '../contants/data'
import { singles2 } from '../contants/data'

import { singsMobile } from '../contants/data'
import "./Musics.css"
import { AiOutlineBell } from "react-icons/ai"
import { BsClockHistory } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { useMediaQuery } from 'react-responsive'

import CardMobile from "../components/CardMobile"

const Musics = () => {

  const isMobile = useMediaQuery({ maxWidth: 767})
  return (
    <>
    {isMobile ? (
      <>
      <section className="musics-mobile">
        <div className="header-mobile">
        <p>Boa noite</p>
        <div className="icons-header">
        <AiOutlineBell color="#ffff" fontSize={25} />
        <BsClockHistory color="#ffff" fontSize={22} style={{ marginLeft: "20px"}} />
        <FiSettings color="#ffff" fontSize={22} style={{ marginLeft: "20px"}} />
        </div>
        </div>

        <div className="btns">
          <button className="btn-music">Música</button>
          <button className="btn-podcast">Podcasts e programas</button>
        </div>

        <section  className="grid-cards-mobile">
      {singsMobile.map((item) => (
          <CardMobile title={item.title} subtitle={item.subtitle} image={item.image} key={item.id} />
          ))}
        </section>

       <section className="playlist-mobile">
        <div className="musics-title-container">
       <h1>Playlist do Spotify</h1>
     </div>

     <div className="playlist-container">
      {singles.map((item) => (
       <div key={item.id} className="card-playlist">
        <img className="img-music-mobile" src={item.image} alt={item.title} />
        <p className="title-mobile">{item.title}</p>
        <p className="subtitle-mobile">{item.subtitle}</p>
        </div>

      ))}
      </div>

      </section>
      <section className="playlist-mobile">
        <div className="musics-title-container">
       <h1>Concentração</h1>
     </div>

     <div className="playlist-container">
      {singles2.map((item) => (
       <div key={item.id} className="card-playlist">
        <img className="img-music-mobile" src={item.image} alt={item.title} />
        <p className="title-mobile">{item.title}</p>
        <p className="subtitle-mobile">{item.subtitle}</p>
        </div>

      ))}
      </div>

      </section>
      </section>
      </>
    ): (
      <>
       <section className="musics-container">
      <div className="gradient">
      <div className="musics-title-container">
      <h1>Playlist do Spotify</h1>
      <a href="#">Mostrar tudo</a>
      </div>
     
     <div className="grid-cards-musics">
      {singles.map((item) => (
        <Card key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} />
      ))}
      </div>
      </div>

     
      <div className="musics-title-container" style={{marginTop: "80px"}}>
      <h1>Concentração</h1>
      <a href="#">Mostrar tudo</a>
        </div>
      <div className="grid-cards-musics">
      {singles2.map((item) => (
        <Card key={item.id} image={item.image} title={item.title} subtitle={item.subtitle} />
      ))}
      </div>

      <div style={{height: "150px"}} />
    </section>
      </>
    )}
   
    </>
  )
}

export default Musics