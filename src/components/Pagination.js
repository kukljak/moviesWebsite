import React, {useContext} from "react";
import {ThemeContext} from "./PopularMovies"

const Pagination = (props) => {
    const theme = useContext(ThemeContext);
    const disableButton = (currentPage, totalPages) => {
        if (props.buttonName === "Previous Page" && currentPage === 1){
            return true;
        } else if (currentPage === totalPages && props.buttonName === "Next Page") {
            return true;
        }
    }

    return (
        <button 
        onClick={props.clickFunc} 
        disabled={props.totalPages && disableButton(props.page, props.totalPages)} 
        style={{backgroundColor:theme === "dark" ? "white" : "#5EAAA8"}}
        >
        {props.buttonName}
        </button>
    );  
}

export default Pagination;
