import React, { useState, useEffect } from 'react'

import { Card } from "../index"

import axios from "axios"

import "./Pagode.css"

const Pagode = ({ token }) => {
  const [pagode, setPagode] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFARvdmw6EIef/playlists?limit=20" , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setPagode(data.playlists.items)
        console.log("playlists =>",data.playlists.items)
      } catch(error) {
        console.log(error)
      }
    }
   
    fetchData()

  }, [])
  return (
    <section className="top-musics-container">
        <h1>Pagode</h1>
     
     <div className="grid-cards-musics">
      {pagode.map((item) => (
                <Card key={item.id} image={item.images[0].url} title={item.name} description={item.description.length > 20 ? item.description.slice(0,47) : item.description } />
                
                ))}
          </div>
    </section>
  )
}

export default Pagode