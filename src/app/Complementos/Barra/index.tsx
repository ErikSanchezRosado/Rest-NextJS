import Image from "next/image";
import React from 'react';
import restaurant2 from "../imagenes/restaurant2.jpeg";
import restaurant3 from "../imagenes/restaurant3.jpg";
import mesero from "../imagenes/mesero.jpg";
import kibis from "../imagenes/kibis.jpeg";
import panuchos from "../imagenes/panucho.jpg";
import morcilla from "../imagenes/morcilla.jpg";
import styles from "./styles.module.css";
import { info } from "console";

const Barra = () => {
    return (
<nav className="bg-nav py-2 px-4">
                <a href="#carta-rest">Informacion</a>
                <a href="#nuestros-programas">Carta</a>
                <a href="#caracteristicas">Sistema</a>
            </nav>
    )
};

export default Barra;