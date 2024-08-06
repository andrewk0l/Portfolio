import React from 'react'
import './Research.css'
import { Research_data } from '../../assets/Research'

const Research = () => {
    return (
        <div className='research'>
            <div className="research-title">
                <h1>My Research Projects</h1>
            </div>
            <div className="research-container">
                {Research_data.map((research, index)=>{
                    return <div key={index} className="research-format">
                        <h3>{research.r_no}</h3>
                        <h2>{research.r_name}</h2>
                        <p>{research.r_desc}</p>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Research