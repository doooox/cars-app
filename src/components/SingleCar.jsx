import React from 'react'

const SingleCar = ({brand, model, year, maxSpeed, isAutomatic, engine, numberOfDoors}) => {
  return (
    <div>
        <h1>{brand}</h1>
        <ul>
            <li>Model: {model}</li>
            <li>Year: {year}</li>
            <li>Cars max speed:{maxSpeed}</li>
            <li>{(!isAutomatic)? 'Manual transmision': 'Automatic transmision'}</li>
            <li>Cars engine: {engine}</li>
            <li>Car has {numberOfDoors} of dors</li>
        </ul>

    </div>
  )
}

export default SingleCar