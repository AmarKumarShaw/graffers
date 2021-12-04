import React, { useState, useEffect } from 'react';
import axios from "axios"; //imported axios for fetching Apis
import "./Cards.css";
import Cr from './../Cr';  //imported Card content component inorder to reuse it
import Loading from './../Loader/Loading';


const Cards = () => {

    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

   


    const getData = async () => {
        const res = await axios.get(
            `https://swapi.dev/api/people/`
        );
        const data = res.data.results
        setLoading(true)
        setDatas(data)
    }

    useEffect(() => {    
        

            getData()
        
        
    }, []);

    return (
        <>
            {loading
                ?
                datas.map((people, idx) => {
                    const {name,mass,height,hair_color,skin_color,eye_color} = people
                    return (
                        <Cr key={idx} name={name} mass={mass} height={height}  
                            hair={hair_color} skin={skin_color} eye={eye_color}

                        />
                    )
                })

                : <Loading/>}
        </>
    )
}


export default Cards
