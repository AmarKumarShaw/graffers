import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import "./Loading.css"

const Loading = () => {
    return (
        <div className="loading">
            <BounceLoader
                    size={80}
                    color={"#808080"}
                 />            
        </div>
    )
}

export default Loading
