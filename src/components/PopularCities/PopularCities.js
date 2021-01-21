import React, {useEffect} from "react";
import cities from '../../data/popularCities'

const PopularCities = (props) => {
    const clickOnCity=(el)=>{
        el.target.style.display="none"
    }
    return (
        <div>
            {cities.cities.map(el=>
                <span key={el.id} onClick={clickOnCity}>{el.name}</span>)}
        </div>
    )
}

export default PopularCities