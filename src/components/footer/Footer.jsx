import React from 'react'
import "./Footer.css"

import { Shuffle, Repeat2, Rows } from 'lucide-react'

import { BiSkipPrevious, BiSkipNext, BiVolumeFull } from "react-icons/bi"
import { AiFillPauseCircle, AiOutlinePlaySquare } from "react-icons/ai"
import { TbDevices2 } from "react-icons/tb"

const Footer = () => {
  return (
    <>
    <footer>
    
    <div className="player-container">
      <div className="icons-player">
        <div>
        <Shuffle color="#b3b3b3" strokeWidth={0.75} size="20px" style={{ opacity: "70%"}} />
        </div>
        <div>
          <BiSkipPrevious color="gray" fontSize={35} style={{ opacity: "70%"}} />
        </div>
        <div>
        <AiFillPauseCircle color="gray" fontSize={40} style={{ opacity: "70%"}} />
        </div>
        <div>
          <BiSkipNext color="gray" fontSize={35} style={{ opacity: "70%"}} />
        </div>
        <div>
        <Repeat2 color="#b3b3b3" strokeWidth={0.75} size="20px" style={{ opacity: "70%"}} />
        </div>
          </div>
          <div className="range-container">
            <div>
            <p>-:--</p>
            </div>
            <div>
            <div className="range" />
            </div>
            <div>
            <p>-:--</p>
            </div>
          </div>
      </div>

      {/* <div className="player-volume">
       <div>
       <AiOutlinePlaySquare color="gray" fontSize={18} style={{ opacity: "70%"}} />
       </div>
       <div>
       <Rows color="#dedede" size="18px" />
       </div>
       <div>
        <TbDevices2 color="#dedede" size="18px" />
       </div>
       <div>
        <BiVolumeFull color="#dedede" size="18px" />
       </div>
       <div>
        <div className="range-volume" />
       </div>

      </div> */}
    </footer>
    </>
  )
}

export default Footer