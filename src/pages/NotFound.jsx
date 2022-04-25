import React from "react";
import '../styles/NotFound.scss'
import Image from'@img/Not-Found.jpg';


const NotFound = () => {
    return(
        <div className="NotFound">
            <img src={Image} />
            <h1>
                Yo Habia Ponido Mi pagina Aqui
            </h1>
        </div>
    )
}
export default NotFound;