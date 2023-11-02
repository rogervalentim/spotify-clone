import React from 'react'

import { GrSpotify } from "react-icons/gr"
import "./Login.css"


const Login = ({ authEndpoint, clientId, redirectUri, responseType}) => {
  return (
    <section className="login-container">
      <div>
      <GrSpotify fontSize={250} color="#1ed760" />
      </div>
      <div>
      <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}><button>Login</button></a>
      </div>
    </section>
  )
}

export default Login