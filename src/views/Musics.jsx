import { useState, useEffect } from 'react'
import { CardMobile, Card, HeaderMusic} from "../components/index"
import { singles } from '../contants/data'
import { singles2 } from '../contants/data'

import { singsMobile } from '../contants/data'
import "./Musics.css"
import { AiOutlineBell } from "react-icons/ai"
import { BsClockHistory } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { useMediaQuery } from 'react-responsive'
import axios from "axios"

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
      {playlists.map((item) => (
       <div key={item.id} className="card-playlist">
        <img className="img-music-mobile" src={item.images[0].url} alt={item.name} />
        <p className="title-mobile">{item.name}</p>
        <p className="subtitle-mobile">{item.description.length > 60 ? item.description.slice(0, 47) : item.description}</p>
        </div>

      ))}
      </div>

      </section>
      <section className="playlist-mobile">
        <div className="musics-title-container">
       <h1>Concentração</h1>
     </div>

     <div className="playlist-container">
     {artists.map((item) => (
       <div key={item.id} className="card-playlist">
        <img className="img-music-mobile" src={item.images[0].url} alt={item.name} />
        <p className="title-mobile">{item.name}</p>
        <p className="subtitle-mobile">{item.description.length > 60 ? item.description.slice(0, 47) : item.description}</p>
        </div>

      ))}
      </div>

      </section>

      <section className="playlist-mobile">
        <div className="musics-title-container">
       <h1>Experimente algo diferente</h1>
     </div>

     <div className="playlist-container">
      {top.map((item) => (
       <div key={item.id} className="card-playlist">
        <img className="img-music-mobile" src={item.images[0].url} alt={item.name} />
        <p className="title-mobile">{item.name}</p>
        <p className="subtitle-mobile">{item.description.length > 60 ? item.description.slice(0, 47) : item.description}</p>
        </div>

      ))}
      </div>

      </section>

      <section className="playlist-mobile">
        <div className="musics-title-container">
       <h1>Pagode</h1>
     </div>

     <div className="playlist-container">
      {pagode.map((item) => (
       <div key={item.id} className="card-playlist">
        <img className="img-music-mobile" src={item.images[0].url} alt={item.name} />
        <p className="title-mobile">{item.name}</p>
        <p className="subtitle-mobile">{item.description.length > 60 ? item.description.slice(0, 47) : item.description}</p>
        </div>

      ))}
      </div>

      </section>
      </section>
      </>
    ): (
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
    )}
   
    </>
  )
}

export default Musics