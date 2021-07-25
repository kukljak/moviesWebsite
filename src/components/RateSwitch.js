import React,{useState} from "react";

const RateSwitch = (props) => {
    const [isToggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!isToggle);
    }
        
    return(
         <span className="rate" onClick={handleClick} style={{color:props.style}}>
        {isToggle ? `${props.popularity} Hide Rating`: "Show Rating"}
        </span>
    );
            
}

export default RateSwitch;