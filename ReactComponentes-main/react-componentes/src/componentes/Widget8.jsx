//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

const Widget8 = () => {

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
                <h1>Ubicación 📌</h1>
            </CardHeader>
            <hr />
            <CardBody>
                <div className='flex flex-col gap-3 esp'>
                    {/* Usamos la funcion iframe de html */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.0743756497639!2d-4.0245452138461495!3d39.870905818787094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0a53483a57e7%3A0xc7f7d4815179b44b!2sIES%20Azarquiel!5e0!3m2!1ses!2ses!4v1698655854360!5m2!1ses!2ses"
                        width="500" height="400" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Widget8;
