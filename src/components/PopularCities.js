import React, {useState} from "react";
import cities from '../data/popularCities'
import {Box, Button} from "@material-ui/core";
import {connect} from "react-redux";
import {getWeather} from "../redux/app-reducer";

const images=[
    {
        href: '../../imgs/moscow.jpg',
        title: 'Moscow',
        width: '40%',
    }
]

const PopularCities = (props) => {
    const [city,setCity]=useState('')
    const handleClick=(name)=>{
        setCity(name)
        props.getWeather(name)
    }
    return (
        <Box >
            {cities.cities.map((el)=>(
                <Button
                    disabled={city===el.name}
                    key={el.id}
                    onClick={(e)=>handleClick(el.name)}
                    size={'large'}>
                    {el.name}</Button>))}
        </Box>
    )
}
const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps, {getWeather})(PopularCities)