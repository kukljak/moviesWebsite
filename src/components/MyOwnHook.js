import React, {useEffect, useState} from "react";

const useFetchMovies = (url) => {

    const [page,setPage] = useState(1);
    const [popupActive, setPopupActive] = useState("");
    const [theme, setTheme] = useState("light");
    const [fetchResult, setFetchResult] = useState();
    
    async function fetchMovies(url) {
        try {
            const res = await fetch(url + page);
            if (res.ok) {
                const data = await res.json();
                setFetchResult({"data":data.results, "total":data.total_pages, "currentPage":data.page});
                
            } else {
                console.log(`Problem is with ${res.status}`);
                throw new Error(`Problem with ${res.status}`);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    
    function changeBackgroundColor() {
        if (theme === "light") {
            document.body.style.backgroundColor = "#0a043c";
        }else if (theme === "dark") {
            document.body.style.backgroundColor = "#1B1717";
        }    
    }

    useEffect(() => {
        fetchMovies(url);
        changeBackgroundColor();
    },[page,fetchResult]);

    function clickNextPage() {   
        setPage(1 + page);
    }

    function clickPreviousPage() {
        setPage(page - 1);        
    }

    function popupListener(value) {
        setPopupActive(value);
    }
    
    return ({fetchResult,theme,setTheme,page, popupActive, clickNextPage, clickPreviousPage, popupListener});
    

}

export default useFetchMovies;
