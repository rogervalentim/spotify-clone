import { useEffect, useState } from 'react'

import 
 { 
  Sidebar, 
  Navbar, 
  Footer, 
  Pagode, 
  Brazil, 
  Classical, 
  TopMusics,
  Login,
} 
from 
'./components/index'

import Musics from './views/Musics'

import { Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => { 

  const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID
  const redirectUri = import.meta.env.VITE_REACT_APP_REDIRECT_URI
  const authEndpoint = "https://accounts.spotify.com/authorize"
  const responseType= "token"

  const [token, setToken] = useState("")
  

  useEffect(() => {
    const hash = window.location.hash

    let token = window.localStorage.getItem("token")
  
    if (!token && hash) {
      const params = new URLSearchParams(hash.substring(1));
      token = params.get("access_token");
  
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
  
    setToken(token)
  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
}

  return (
    <div className="app">
   
    {!token &&
    <Login 
      authEndpoint={authEndpoint} 
      clientId={clientId} 
      redirectUri={redirectUri}
      responseType={responseType}
    />
}
      {token && (
           <>
           <section className="container-principal">
           <aside>
           <Sidebar />
           </aside>
             <main className="main-container">
             <Navbar logout={logout} />
             <section className="musics-container">
             <Routes>
               <Route path="/" element={<Musics token={token} />} />
               <Route path="/top" element={<TopMusics token={token} />} />
               <Route path="/classical" element={<Classical token={token} />} />
               <Route path="/brasil" element={<Brazil token={token} />} />
               <Route path="/pagode" element={<Pagode token={token} />} />
             </Routes>
             </section>
            </main>
           </section>
            <Footer />
       </>
      )}
  


    </div>
  )
}

export default App