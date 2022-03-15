import React, {useState} from 'react'
import Countdown from 'react-countdown'

export default function Countdowns() {
    let dataTimer = ''
    const [fechas, setFecha] = useState({
        fecha:"",
        hora:""

    })
    
    const handleChange = (e) => { 
        e.preventDefault()
        setFecha({
            ...fechas, 
            [e.target.name]: e.target.value,
        })
        
    }
    
    return (
        <div>
            <div>
            <form >
                <input type='date' name='fecha'   onChange={handleChange}></input>
                <input type='time' name='hora'    onChange={handleChange}></input>
                
            </form>
            </div>
            <div>
                <Countdown date={`${fechas.fecha} ${fechas.hora}`}  />
            </div>
        </div>
    )
}
