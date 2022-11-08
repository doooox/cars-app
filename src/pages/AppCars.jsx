import React, { useState, useEffect } from 'react'
import SingleCar from '../components/SingleCar';
import CarsService from '../services/CarsService';

const AppCars = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getCarsHandler = async () => {
        setIsLoading(true)
        const data = await CarsService.getAll();
        setCars(data)
        setIsLoading(false)
    }

    useEffect(() => { getCarsHandler() }, [])

    return (
        <div>
            <h1>Car App</h1>
            <ul>
                {(!isLoading) && cars.map((car) => <SingleCar 
                key={car.id} 
                brand={car.brand} 
                model={car.model} 
                year={car.year} 
                maxSpeed={car.maxSpeed} 
                isAutomatic={car.isAutomatic} 
                engine={car.engine} 
                numberOfDoors={car.numberOfDoors}
                />)}
                {(isLoading) && <p>Loading ...</p>}
            </ul>
        </div> 

    )
}

export default AppCars