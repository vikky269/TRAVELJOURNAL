import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'


export function Card(props) {
    

    return (
        <>
            <div className="card-container">
                <div className="card-img-container">
                  <img src= {props.imageUrl} alt="" className='card-img' />
                </div>
                <div className="card-text">
                  <div className="card-text-content">
                  <FaLocationDot  className='location-icon'/>
                  <p className='location-text'> {props.location} </p>
                  <a href={props.googleMapsUrl}  target='_blank'>View on Google Maps</a>
                  </div>

                  <h1> {props.title} </h1>
                  <h3> {props.startDate} - {props.endDate}  </h3>
                  <p> {props.description} </p>
                </div>

                
            </div>
            <hr />
        </>
    )
}
