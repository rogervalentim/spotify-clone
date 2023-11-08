import { useState, useEffect } from 'react'
import { Card, HeaderMusic} from "../components/index"

import axios from "axios"

import "./Musics.css"

const Musics = ({ token }) => {
  const [playlists, setPlaylists] = useState([])
  const [ artists, setArtists] = useState([])
  const [top, setTop] = useState([])
  const [pagode, setPagode] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/categories/pop/playlists?limit=4" , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setPlaylists(data.playlists.items)
      } catch(error) {
        console.log(error)
      }
    }
   
    fetchData()

  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/categories/classical/playlists?limit=4" , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setTop(data.playlists.items)
        } catch(error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/featured-playlists?limit=4" , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setArtists(data.playlists.items)
      } catch(error) {
        console.log(error)
      }
    }
   
    fetchData()

  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFARvdmw6EIef/playlists?limit=4" , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setPagode(data.playlists.items)
      } catch(error) {
        console.log(error)
      }
    }
   
    fetchData()

  }, [])

  return (
    <>
       <section >
      <div className="gradient">
      <HeaderMusic title="Playlists do spotify" link="/top"/>
     
     <div className="grid-cards-musics">
      {playlists.map((item) => (
                <Card key={item.id} image={item.images[0].url} title={item.name} description={item.description.length > 60 ? item.description.slice(0,47) : item.description } />
                
                ))}
          </div>
      </div> 

      <HeaderMusic title="Em Alta" link="/classical" />
        
      <div className="grid-cards-musics">
       {top.map((item) => (
        <Card key={item.id} image={item.images[0].url} title={item.name} description={item.description.length > 60 ? item.description.slice(0,47) : item.description } />
      ))}
      </div>

      <HeaderMusic title="Experimente algo diferente" link="/brasil" />
        
      <div className="grid-cards-musics">
       {artists.map((item) => (
        <Card key={item.id} image={item.images[0].url} title={item.name} description={item.description.length > 60 ? item.description.slice(0,47) : item.description } />
      ))}
      </div>

      
      <HeaderMusic title="Pagode" link="/pagode" />
        
      <div className="grid-cards-musics">
       {pagode.map((item) => (
        <Card key={item.id} image={item.images[0].url} title={item.name} description={item.description.length > 60 ? item.description.slice(0,47) : item.description } />
      ))}
      </div>

      <div style={{height: "150px"}} />
    </section>   
    </>
  )
}

export default Musics