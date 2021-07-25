import React from "react";
import Popup from "./Popup"

const PosterFilm = (props) =>{

    const togglePopup = () => {
        props.popupListener(props.linkIMG);    
    }


    return(<>
        <img src={`https://image.tmdb.org/t/p/original/${props.linkIMG}`} alt={props.linkIMG} onClick={togglePopup}/>
        {props.linkIMG === props.popupActive &&
        <Popup
            content={`Release-date was ${props.releaseDate}`}
            handleClose={()=>{props.popupListener("")}}
        />}
        </>
    );
}


export default PosterFilm;

