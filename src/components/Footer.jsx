import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-paragrafos">
      <p className="paragrafo-1">PRÉ-VISUALIZAÇÃO DO SPOTIFY</p>
      <p>Regista-te para ouvires músicas e podcasts ilimitados com alguns anúncios de vez em quando. Não é necessário cartão de crédito.</p>
      </div>
      <div className='button-container'>
        <button><strong>Regista-te já gratuitamente</strong></button>
      </div>
    </footer>
    </>
  )
}

export default Footer