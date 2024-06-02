//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

//Estos son los imports extra para el calendario
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

const Widget1 = () => {

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
                <p>Calendario 🗓️</p>
            </CardHeader>
            <hr />
            <CardBody>
                <div>
                    {/* En este caso solo debemos usar el componente Calendar */}
                    <Calendar aria-label="Date" value={today(getLocalTimeZone())} className='dia' />
                </div>
                {/* En esta parte situamos el boton de guardado */}
                <Listbox
                    aria-label="Actions"
                    onAction={handleAction}
                >
                    <ListboxItem className='guardar' key="Widget Guardado ✅">Guardar Widget  💾</ListboxItem>
                </Listbox>
                {/* Realizamos una carga falsa para mostrar la animación de guardado */}
                {loading && <CircularProgress label="Loading..." />}
            </CardBody>
            <Divider />
        </Card>
    );
};

export default Widget1;
