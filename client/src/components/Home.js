import React from 'react';
import Carousels from './Carousel.js'
import style from '../Estilos/home.module.css';
function Home ()  {


    return (
        <div className={style.ContainerHome}>
            
            
            <Carousels/>
            

            
        </div>
    )
}

export default Home;