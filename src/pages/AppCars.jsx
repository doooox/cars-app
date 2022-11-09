import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SingleCar from '../components/SingleCar';
import CarsService from '../services/CarsService';
import DeleteFile from '../UI/DeleteFile';

const AppCars = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [deleteCarMsg, setDeleteCarMsg] = useState()

    const getCarsHandler = async () => {
        setIsLoading(true)
        const data = await CarsService.getAll();
        setCars(data)
        setIsLoading(false)
    }

    const untoggleDeleteCarMsgHandler = () => {
        setDeleteCarMsg(false)
    }
    const toggleDeleteCarMsgHandler = () => {
        setDeleteCarMsg(true)
    }
    const deleteCarHandler = async (id) => {

        const deleteCar = CarsService.delete(id);
        if (deleteCar) {
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
                    {deleteCarMsg && <DeleteFile title="Are you sure you want to delete this car?" onYesDeleteCar={() => {
                        deleteCarHandler(car.id)
                    }} onNoDeletCar={untoggleDeleteCarMsgHandler} />}
                    <Link to={`/edit/${car.id}`}>
                        <button className="btn btn-warning">Edit</button>
                    </Link>
                    <button type='button' onClick={toggleDeleteCarMsgHandler}>Delete</button>
                </div>)}
                {(isLoading) && <p>Loading ...</p>}
            </ul>

        </div>

    )
}

export default AppCars
