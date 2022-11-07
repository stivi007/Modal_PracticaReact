import { ImageNotSupported } from "@mui/icons-material";
import React, {useState} from "react";
import image from '../public/imagen.jpg';






const Modal =({open,onClose})=>{

    if(!open) return null

    return(
        <div onClick={onClose} className="overlay">
            <div onClick={(e)=>{e.stopPropagation()}}
             className="modalContainer">
                <img src="https://img.freepik.com/foto-gratis/pantalla-escaneo-programador-su-reloj-inteligente-camara-telefono-inteligente_1098-18710.jpg?w=1380&t=st=1667773033~exp=1667773633~hmac=ef23bb014eb518a129690d37ba085eb04a893dddfade9e2cfaee2fa1500a264a"  />

                <div className="modalRight">
                    <p className="closeBtn" onClick={onClose}>X</p>
                    <div className="content">
                        <p>Este es un ejemplo de modal</p>
                        <h1>Este es el titulo del modal</h1>
                        <p>Este es final del modal</p>
                    </div>
                    <div className="btnContainer">
                        <button onClick={onClose} className="btnPrimary">
                            <span className="bold">Close</span>
                        </button>
                        <button onClick={onClose} className="btnOutLine">
                            <span className="bold">Acept</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal