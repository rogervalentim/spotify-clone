import React from 'react'
import Card from '../components/Card'
import { singles } from '../contants/data'
import { singles2 } from '../contants/data'
import "./Musics.css"

const Musics = () => {
  return (
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
  )
}

export default Musics