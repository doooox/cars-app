import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

    const deleteCarHandler = async (id) =>{
        const deleteCar = CarsService.delete(id);
        if(deleteCar){
        setCars([...cars.filter((car) => car.id !== id)]);
        }
    }

    useEffect(() => { getCarsHandler() }, [])

    return (
        <div>
            <h1>Car App</h1>
            <ul>
                {(!isLoading) && cars.map((car) => <div key={car.id}><SingleCar

                    brand={car.brand}
                    model={car.model}
                    year={car.year}
                    maxSpeed={car.maxSpeed}
                    isAutomatic={car.isAutomatic}
                    engine={car.engine}
                    numberOfDoors={car.numberOfDoors}
                />
                    <Link to={`/edit/${car.id}`}>
                        <button className="btn btn-warning">Edit</button>
                    </Link>
                    <button type='button' onClick={() => {
                  deleteCarHandler(car.id) }}>Delete</button>
                </div>)}
                {(isLoading) && <p>Loading ...</p>}
            </ul>

        </div>

    )
}

export default AppCars
