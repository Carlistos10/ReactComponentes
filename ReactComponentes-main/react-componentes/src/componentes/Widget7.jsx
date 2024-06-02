//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

//Debemos añadir este import para poder usar el switch
import { Switch } from "@nextui-org/react";


const Widget3 = () => {

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
                <h1>Centro de Control 💻</h1>
            </CardHeader>
            <hr />
            <CardBody>
                {/* Aqui indicamos los switch con el color correspondiente */}
                <div className='flex flex-col gap-3 esp'>
                    <Switch defaultSelected color="success">WiFi 🛜</Switch>
                    <Switch defaultSelected color="success">Datos Móviles 📶</Switch>
                    <Switch defaultSelected color="success">Bluetooth 🌐</Switch>
                    <Switch defaultSelected color="warning">Ahorro de batería 🪫</Switch>
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

export default Widget3;
