import React, {useState} from 'react'
import Countdown from 'react-countdown'
import style from '../../Estilos/countdown.module.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
export default function Countdowns() {
    
    const [fechas, setFecha] = useState({
        fecha:"",
        hora:""

    })
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
            return (<div>
                <p>Introduce una Fecha y una Hora</p>
            </div>);
            } else {
            return (
                <div className={style.timer}>
                <div className={style.timercont}>
                <h3>{days}</h3>
                <span className="text-muted"> Dias    </span>
                </div>
                <div className={style.timercont}>
                <h3>{hours} </h3>
                <span className="text-muted"> Horas   </span>
                </div>
                <div className={style.timercont}>
                <h3>{minutes}</h3>
                <span className="text-muted"> Minutos </span>
                </div>
                <div className={style.timercont}>
                <h3>{seconds}</h3>
                <span className="text-muted">Segundos</span>
                </div>
                </div>
            );
            }
        };
    
    const handleChange = (e) => { 
        e.preventDefault()
        setFecha({
            ...fechas, 
            [e.target.name]: e.target.value,
        })
        
    }
    
    return (
        
        <div className={style.container}>
            
                
                <div  className={style.container1}>
                    <div>
                        <form className="row g-3">
                            
                            <div className="col-md-6">
                            <label>Intoduce la fecha</label>
                            <input type='date' name='fecha'   onChange={handleChange} className="form-control my-2"></input>
                            </div>
                            <div className="col-md-6">
                            <label>Intoduce la Hora</label>
                            <input type='time' name='hora'    onChange={handleChange} className="form-control my-2"></input>
                            </div >
                            
                            <button type="submit" class="btn btn-primary">Start</button>
                            

                            </form> 
                    </div>      
                            
                
                            <div  className={style.count}>
                            <Countdown renderer={renderer}  date={`${fechas.fecha} ${fechas.hora}`}  />
                            </div>
                            
                </div>            
                            
                
        </div>
        
    )
}
