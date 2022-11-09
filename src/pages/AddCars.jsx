import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './AddCar.css'
import CarsService from '../services/CarsService'

const AddCars = () => {
    let { id } = useParams();
    const history = useHistory();
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(1990);
    const [maxSpeed, setMaxSpeed] = useState(0);
    const [numberOfDoors, setNumberOfDoors] = useState(0);
    const [isAutomatic, setIsAutomatic] = useState(false);
    const [engine, setEngine] = useState(null);

    const engines = ["diesel", "petrol", "electric", "hybrid"];

    const brandHandler = (e) => {
        setBrand(e.target.value)
    }
    const modelHandler = (e) => {
        setModel(e.target.value)
    }
    const yearHandler = (e) => {
        setYear(e.target.value)
    }
    const maxSpeedHandler = (e) => {
        setMaxSpeed(e.target.value)
    }
    const nuberOfDoorsHandler = (e) => {
        setNumberOfDoors(e.target.value)
    }
    const isAutomaticHandler = (e) => {
        setIsAutomatic(e.target.value = true)
    }
    const engineHandler = (e) => {
        setEngine(e.target.value)
    }

    const getSingleCar = async () => {
        if (!id) {
            return alert('No car found!')
        }
            const carData = await CarsService.getCar(id);
            setBrand(carData.brand);
            setModel(carData.model);
            setYear(carData.year);
            setMaxSpeed(carData.maxSpeed);
            setNumberOfDoors(carData.numberOfDoors);
            setIsAutomatic(carData.isAutomatic);
            setEngine(carData.engine);
            console.log(carData);
    };
    useEffect(() => {
        getSingleCar();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!id) {
            await CarsService.create({
                brand,
                model,
                year,
                maxSpeed,
                numberOfDoors,
                isAutomatic,
                engine,
            });
        } else {
            await CarsService.edit(id, {
                brand,
                model,
                year,
                maxSpeed,
                numberOfDoors,
                isAutomatic,
                engine,
            });
        }
        history.push("/cars");
    }


    const resetHandler = () => {
        setBrand('')
        setModel('')
        setYear('')
        setMaxSpeed('')
        setNumberOfDoors('')
        setIsAutomatic(false)
        setEngine('')
    }
    const previewHandler = () => {
        const transmition = (!isAutomatic) ? 'manual transmision' : 'automatic transmision'
        alert(`
            Car brand: ${brand}
            Car model: ${model}
            Year of production: ${year}
            Cars maximum speed is ${maxSpeed} km/h
            Number of doors: ${numberOfDoors}
            The car has ${transmition}
            Engine type: ${engine}
        `)
    }
    const years = () => {
        let arr = [];
        for (let i = 1990; i <= 2018; i++) arr.push(i);
        return arr;
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label
                    htmlFor="brand">
                    Enter car brand
                </label>
                <input
                    type="text"
                    id="brand"
                    required
                    minLength={2}
                    value={brand}
                    onChange={brandHandler}
                />
                <label
                    htmlFor="model">
                    Enter car model
                </label>
                <input
                    type="text"
                    id="model"
                    required
                    minLength={2}
                    value={model}
                    onChange={modelHandler}
                />
                <label
                    htmlFor="">
                    Select year
                </label>
                <select
                    value={year}
                    onChange={yearHandler}
                >
                    {years().map((year, index) => (
                        <option key={index} required value={year}>{year}</option>
                    ))}
                </select>
                <label
                    htmlFor="maxSpeed">
                    Enter cars maximum speed
                </label>
                <input
                    type="number"
                    name=""
                    id="maxSpeed"
                    value={maxSpeed}
                    onChange={maxSpeedHandler}
                />
                <label
                    htmlFor="maxSpeed">
                    Enter cars door number
                </label>
                <input
                    type="number"
                    required
                    id="maxSpeed"
                    value={numberOfDoors}
                    onChange={nuberOfDoorsHandler}
                />
                <label
                    htmlFor="isAutomatic">
                    Select gearbox type
                </label>
                <input
                    type="checkbox"
                    id="isAutomatic"
                    value={isAutomatic}
                    checked={isAutomatic}
                    onChange={isAutomaticHandler}
                />
                <label>
                    <div className="engineType">
                        Choose an engine:{" "}
                        {engines.map((type) => (
                            <span key={type}>
                                {type}
                                <input
                                    type='radio'
                                    required
                                    onChange={engineHandler}
                                    name='engine'
                                    checked={type == engine}
                                    value={type}
                                />{" "}
                            </span>
                        ))}
                    </div>
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={resetHandler}>Reset</button>
                <button type="button" onClick={previewHandler}>Preview</button>
            </form>
        </div>
    );
}

export default AddCars

