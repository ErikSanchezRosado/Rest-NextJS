import React from 'react';
import kibis from "../imagenes/kibis.jpeg";
import mesero from "../imagenes/mesero.jpg";
import morcilla from "../imagenes/morcilla.jpg";
import panuchos from "../imagenes/panucho.jpg";
import restaurant2 from "../imagenes/restaurant2.jpeg";
import restaurant3 from "../imagenes/restaurant3.jpg";
import styles from "./styles.module.css";

const Contenido = () => {
    return (
        <><section id="hero">
            <><h1>Restaurant Gastronomia Yucateca
            </h1></>
            <button>DISFRUTA YA!</button>
        </section><section id="carta-rest">
                <div className="container">
                    <div className="img-container"></div>
                    <div className="texto">

                        <h2><span className="color-acento">Gastronomia Yucateca</span></h2>
                        <p>Los deleites culinarios de la cocina típica yucateca están hechos de una exquisita mezcla de ingredientes utilizados por los antiguos mayas, con sabores traídos por los españoles durante la Colonia. La inigualable conjunción de condimentos y especias tales como la pepita de calabaza, el orégano, la cebolla morada, la naranja agria, el chile dulce, la lima, el tomate, el achiote, el chile xcat, el chile habanero, el chile max y el cilantro, le dan ese sazón tan especial a la comida de esta región, que alguna vez fue conocida como "la tierra del faisán y del venado" por utilizar estas especies como ingredientes principales de los manjares que aquí se preparaban. Actualmente, éstos han sido sustituidos por carne de cerdo y pavo, y se han agregado diversos condimentos dando lugar a los deliciosos platillos regionales que hoy en día, todos conocemos y disfrutamos.</p>
                    </div>
                </div>
            </section>

            <section id="caracteristicas">
                <div className="container">
                    <ul>
                        <li>✔️ 100% higiene</li>
                        <li>✔️ Reservaciones</li>
                        <li>✔️ Asistencia personalizada</li>
                        <li>✔️ Personal Calificado</li>
                    </ul>
                </div>
            </section>
            <section id="final">
                <h2>Listo para disfrutar?</h2>
                <button>Ven ya!</button>
            </section></>




    )
};

export default Contenido;
