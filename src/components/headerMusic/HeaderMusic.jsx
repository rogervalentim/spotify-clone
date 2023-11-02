import React from 'react'

import { Link } from "react-router-dom"

import "./HeaderMusic.css"

const HeaderMusic = ({ title, link }) => {
  return (
    <div className="musics-title-container">
    <h1>{title}</h1>
    <Link to={link}>Mostrar tudo</Link>
    </div>
  )
}

export default HeaderMusic