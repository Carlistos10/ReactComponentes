//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

//Hay que añadir este import para el slider
import { Slider } from "@nextui-org/react";

const Widget4 = () => {
    //Creamos un guardado falso para que aparezca que esta cargando y avisamos al usuario que se ha guardado correctamente
    const [loading, setLoading] = useState(false);

    const handleAction = (key) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(key);
        }, 1500);
    };

    return (
        //Usamos los componentes de nextui para crear la tarjeta y el widget
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>¿Cómo te encuentras hoy 💆?</h1>
            </CardHeader>
            <hr />
            <CardBody>
                {/* Creamos las dos opciones, poniendo una a cada lado y el slider para indicar cual es la opcion mas acertada */}
                <div className='satisfaccion'>
                    <p className='mal'>😞</p>
                    <p className='bien'>😁</p>
                    <Slider
                        size="lg"
                        step={0.01}
                        maxValue={1}
                        minValue={0}
                        aria-label="Satisfaccion"
                        defaultValue={0.6}
                        className="max-w-md"
                    />
                </div>
                {/* En esta parte situamos el boton de guardado */}
                <Listbox
                    aria-label="Actions"
                    onAction={handleAction}
                >
                    <ListboxItem className='guardar' key="Widget Guardado ✅">Guardar Widget 💾</ListboxItem>
                </Listbox>
                {/* Realizamos una carga falsa para mostrar la animación de guardado */}
                {loading && <CircularProgress label="Loading..." />}
            </CardBody>
            <Divider />
        </Card>
    );
};

export default Widget4;