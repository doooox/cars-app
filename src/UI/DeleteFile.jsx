import React from 'react'
import classes from './ErrorModule.module.css'

const DeleteFile = ({ title, onYesDeleteCar, onNoDeletCar }) => {
    return (
        <div className={classes.backdrop} onClick={onNoDeletCar}>
            <div className={classes.header}>
                <h2>{title}</h2>
                <button type='button' onClick={onYesDeleteCar}>Yes</button>
                <button type='button' onClick={onNoDeletCar}> No </button>
            </div>
        </div>
    )
}

export default DeleteFile