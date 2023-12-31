import React from 'react';
import Image from "next/image";
import Head from "next/head";
import Barra from "../app/Complementos/Barra"
import Contenido from "./Complementos/Contenido"
import Cartas from "./Complementos/Cartas"
import caracteristicas from './Complementos/Caracteristicas';
import Final from "./Complementos/Final"
import restaurant2 from "../imagenes/restaurant2.jpeg";
import restaurant3 from "../imagenes/restaurant3.jpg";
import mesero from "../../imagenes/mesero.jpg";
import kibis from "../imagenes/kibis.jpeg";
import panuchos from "../imagenes/panucho.jpg";
import morcilla from "../imagenes/morcilla.jpg";
import styles from "./styles.module.css";
import { info } from "console";
import Caracteristicas from './Complementos/Caracteristicas';

export default function Home() {
    return (
        <>
            <Head>
                <title>Restaurant Yucateco</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="container">
                    <p className="logo">Restaurant</p>
                </div>
            </header>

            <Barra />
            <Contenido />
            <Cartas />
            <Caracteristicas />
            <Final />
            
        </>
    );
}
