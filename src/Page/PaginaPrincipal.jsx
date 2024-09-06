import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './PaginaPrincipal.css'; // Archivo CSS
import p1 from '../Page/img/p1.png';
import p2 from '../Page/img/p2.png';
import p3 from '../Page/img/p3.png';
import p4 from '../Page/img/p4.png';
import p5 from '../Page/img/p5.png';
import asistenteBot from '../Page/img/asistenteBot.png';
import { Dialog } from 'primereact/dialog';

function PaginaPrincipal() {
    const [visible, setVisible] = useState(false);

    const openDialog = () => {
        setVisible(true);
    };

    const closeDialog = () => {
        setVisible(false);
    };

    return (
        <div className="pagina-principal">
            {/* Sección 1 */}
            <div className='flex px-5 gap-6'>
                <div className="item item-left">
                    <img src={p1} alt="Mapa Mental" className="imagen" />
                    <div className="texto-container">
                        <p className="texto">El mapa mental es una herramienta de estudio bastante útil. Consiste en un diagrama que se utiliza para representar ideas, palabras, dibujos, imágenes, entre otros elementos que se relacionan a una idea o concepto central.</p>
                        <p className="texto">Nos sirve para representar ideas, notas, palabras en torno a un concepto principal y puede ayudarte a: Memorizar o retener información sobre un tema.</p>
                    </div>
                </div>

                
                <div className="item item-right">
                    <div className="texto-container">
                        <p className="texto">Los resúmenes consisten en un escrito, generalmente breve, en el que se sintetizan los puntos de mayor relevancia de un texto de mayor complejidad.</p>
                        <p className="texto">Los resúmenes son una técnica bastante recomendable al momento de repasar o memorizar algún tema en particular ya que su objetivo es aportar información de manera clara, coherente y objetiva.</p>
                    </div>
                    <img src={p2} alt="Resúmenes" className="imagen" />
                </div>
            </div>

            {/* Sección 2 */}
            <div className='flex px-5 gap-6'>
                <div className="item item-left gap-3">
                    <img src={p3} alt="Cuadro Comparativo" className="imagen" />
                    <div className="texto-container">
                        <p className="texto">Los cuadros comparativos son diagramas que permiten organizar visualmente conceptos, temas o categorías.</p>
                        <p className="texto">Se suelen usar en estudios y análisis para resaltar similitudes, diferencias y relaciones entre los elementos comparados. Por lo general, se estructuran.</p>
                    </div>
                </div>

                <div className="item item-right gap-3">
                    <div className="texto-container">
                        <p className="texto">Consiste en resaltar las ideas más significativas del texto con distintos colores de acuerdo con la importancia del punto que representan.</p>
                        <p className="texto">El objetivo del subrayado es marcar las ideas principales y los datos más importantes, de modo que después, para repasar, solo leas esas partes. Así, lo subrayado te permitirá recordar el contenido de dicho texto.</p>
                    </div>
                    <img src={p4} alt="Subrayado" className="imagen" />
                </div>
            </div>

            {/* Sección 3 */}
            <div className='flex px-5'>
            <div className="item item-left gap-3">
                <img src={p5} alt="Cuadro Comparativo" className="imagen" />
                <div className="texto-container">
                    <p className="texto">La Técnica Pomodoro es un método de gestión del tiempo que consiste en trabajar en intervalos de 25 minutos (llamados "pomodoros") separados por breves descansos, con el objetivo de mejorar la concentración, la productividad y la eficiencia en el trabajo o estudio.</p>
                </div>
            </div>
            </div>
            {/* Imagen que abre la ventana emergente */}
            <div className="flex justify-content-end">
                <img
                    src={asistenteBot} 
                    alt="Abrir Bot"
                    className="imagen-boton"
                    onClick={openDialog}
                    style={{ cursor: 'pointer', width:'6rem', height:'6rem'}}
                />
            </div>

            {/* Ventana emergente */}
            <Dialog
                header="!Bienvenido!"
                visible={visible}
                style={{ width: '50vw' }}
                onHide={closeDialog} 
            >
                <iframe
                    src="https://marcodelama.github.io"
                    title="Bot Interactivo"
                    style={{ width: '100%', height: '400px', border: 'none' }}
                />
            </Dialog>
            
        </div>
    );
}

export default PaginaPrincipal;
