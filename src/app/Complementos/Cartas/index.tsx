import React from 'react';
import kibis from "../imagenes/kibis.jpeg";
import mesero from "../imagenes/mesero.jpg";
import morcilla from "../imagenes/morcilla.jpg";
import panuchos from "../imagenes/panucho.jpg";
import restaurant2 from "../imagenes/restaurant2.jpeg";
import restaurant3 from "../imagenes/restaurant3.jpg";
import styles from "./styles.module.css";

const Cartas = () => {
    return (
        <section id="restaurant-yucateco">
        <div className="container">
            <h2>Nuestra Carta</h2>
            <div className="cartas">
                <div className="carta">
                    <h3>Kibis</h3>
                    <p>Este platillo consiste en una especie de albóndiga de masa de trigo rellena de carne molida. Para
                        lograr una capa exterior crocante, este plato suele freírse en aceite bien caliente.</p>
                    <span>$ 20.00 (3kibis)</span>
                </div>
                <div className="carta">
                    <h3>Morcilla</h3>
                    <p>La morcilla, también llamada mbusia (nombre proveniente del guaraní), morcillona, rellena,
                        moronga, prieta o relleno, es un embutido a base de sangre cocida, generalmente de cerdo. Suele
                        mezclarse con grasa de cerdo, cebolla y diferentes especias </p>
                    <span>$ 40.00 la Racion</span>
                </div>
                <div className="carta">
                    <h3>Panuchos</h3>
                    <p>El panucho es un platillo típico del sur, muy popular entre Campeche y Mérida. El panucho
                        tradicional consiste en una tortilla de maíz a la que se le hace un pequeño corte en la orilla y
                        se rellena de frijol colado. Hecho esto, se fríe en aceite o manteca. Posteriormente se coloca
                        encima carne de pollo deshebrada, cebolla morada en naranja y salsa tamulada de chile habanero.
                    </p>
                    <span>$ 15.00 La pieza</span>
                </div>
            </div>
        </div>
    </section>
)
};

export default Cartas;