import React from 'react'
import classes from './ErrorModule.module.css'


function ErrorModule({ title, message, onUnsetError }) {
  return (
    <div className={classes.backdrop} onClick={onUnsetError}>
      <div className={classes.header}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button type='button' onClick={onUnsetError}>OK</button>
      </div>
    </div>
  )
}

export default ErrorModule