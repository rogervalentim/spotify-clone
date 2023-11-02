import React, { useState, useEffect } from 'react'

import { Card } from "../index"

import axios from "axios"

import "./Brazil.css"

const Brazil = ({ token }) => {
  const [BrazilianSongs, setBrazilianSongs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/featured-playlists?limit=20" , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setBrazilianSongs(data.playlists.items)
        console.log("playlists =>",data.playlists.items)
      } catch(error) {
        console.log(error)
      }
    }
   
    fetchData()

  }, [])
  return (
    <section className="top-musics-container">
        <h1>Experimente algo diferente</h1>
     
     <div className="grid-cards-musics">
      {BrazilianSongs.map((item) => (
                <Card key={item.id} image={item.images[0].url} title={item.name} description={item.description.length > 20 ? item.description.slice(0,47) : item.description } />
                
                ))}
          </div>
    </section>
  )
}

export default Brazil