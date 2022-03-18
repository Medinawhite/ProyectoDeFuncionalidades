import React from "react";

import style from "../Estilos/footer.module.css";

const Footer = () => {
    return (
        <div className={style.footerContainer}>
        <div className={style.linksContainer}>
            <a className={style.links} href="https://www.linkedin.com/in/alejandro-medina-861a3b162/">
            Mi Perfil de Linkedin
            </a>
            <a className={style.links} href="https://github.com/Medinawhite">
            Perfil de GitHub
            </a>
            <a className={style.links} href="https://front-pg.vercel.app">
            Proyecto Final Henry
            </a>
            
        </div>
        <div className={style.data}>
            <h5>Contacto</h5>
            <p>alejandro.medina.developer@gmail.com</p>
            <p></p>
        </div>
        </div>
    );
};

export default Footer;