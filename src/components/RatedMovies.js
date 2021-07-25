import React from "react";
import RateSwitch from "./RateSwitch";
import Pagination from "./Pagination";
import DarkThemeButton from "./DarkThemeButton";
import LightThemeButton from "./LightThemeButton";
import PosterFilm from "./PosterFilm"
import "./PopularMovies.css";

import useFetchMovies from "./MyOwnHook"


const ThemeContext = React.createContext();

const PopularMovies = () =>{

    const baseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "802cffbd6188b984d30b318313a104ec";

    const fetchMoviePage = useFetchMovies(`${baseUrl}movie/top_rated?api_key=${apiKey}&page=`);    
    
    return (<>
        <div className="titleBox">
            <h1 style={{color:fetchMoviePage.theme === "light" ? "#03506f":"#810000"}}>Favourite Movies</h1>
            {fetchMoviePage.theme === "dark" ? 
                <LightThemeButton clickFunc={() => {fetchMoviePage.setTheme("light") }} /> 
                :
                <DarkThemeButton clickFunc={() => {fetchMoviePage.setTheme("dark") }} />
            }
        </div>        
        {fetchMoviePage.fetchResult &&
            fetchMoviePage.fetchResult.data.map(film => {
                return (<div key={film.id}>
                    <h3 style={{color:fetchMoviePage.theme === "dark" ? "#EEEBDD" : "#a3ddcb"}}>
                        {film.title}
                    </h3>
                    <PosterFilm linkIMG={film.poster_path} releaseDate={film.release_date} popupActive={fetchMoviePage.popupActive} popupListener={fetchMoviePage.popupListener}/>
                    <RateSwitch popularity={film.popularity} style={fetchMoviePage.theme === "dark" ? "#EEEBDD" : "#a3ddcb"} />
                    <p style={{color:fetchMoviePage.theme === "dark" ? "#CE1212" : "#ffe3de"}}>{film.overview}</p>
                </div>)
            })
        }
        <ThemeContext.Provider value={fetchMoviePage.theme}>
            <Pagination buttonName="Previous Page" clickFunc={fetchMoviePage.clickPreviousPage} page={fetchMoviePage.page} totalPages={fetchMoviePage.fetchResult && fetchMoviePage.fetchResult.total} />
            <Pagination buttonName="Next Page" clickFunc={fetchMoviePage.clickNextPage} page={fetchMoviePage.page} totalPages={fetchMoviePage.fetchResult && fetchMoviePage.fetchResult.total} />
        </ThemeContext.Provider>
    </>);
}

export default PopularMovies;
export {ThemeContext};