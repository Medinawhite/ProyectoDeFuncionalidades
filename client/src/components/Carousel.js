import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from'../Estilos/carousel.module.css'


export default function Carousels() {

    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={style.carrouselContainer}>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="white">
                <Carousel.Item>
                    <img
                    className={style.img}
                    src="https://i.imgur.com/OFwWfGe.png"
                    alt="First slide"
                    />
                    <Carousel.Caption className={style.carouselContent}>
                    <h3>Primera imagen</h3>
                    <p>Presentacion de Carrusel de imagenes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={style.img}
                    src="https://i.imgur.com/8HOKLXz.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className={style.carouselContent}>
                    <h3>Segunda imagen</h3>
                    <p>Presentacion de Carrusel de imagenes.</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={style.img}
                    src="https://i.imgur.com/INCGaMJ.png"
                    alt="Third slide"
                    />
                    <Carousel.Caption className={style.carouselContent}>
                    <h3>Tercera imagen</h3>
                    <p>Presentacion de Carrusel de imagenes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </div>
    );
}
