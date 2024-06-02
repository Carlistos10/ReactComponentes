//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

//Necesitamos importar los checkbox de nextui
import { CheckboxGroup, Checkbox } from "@nextui-org/react";


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

    //Aqui recogemos cuando se selecciona alguna casilla
    const [selected, setSelected] = React.useState([]);

    return (
        //Usamos los componentes de nextui para crear la tarjeta y el widget
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Rutina Mañanera 🌞</h1>
            </CardHeader>
            <hr />
            <CardBody>
                <div className="flex flex-col gap-3">
                    {/* Aqui creamos el grupo de checkbox con los checkbox dentro */}
                    <CheckboxGroup
                        value={selected}
                        onValueChange={setSelected}
                    >
                        <Checkbox value="Cara Limpia">Lavarse la cara 🧼</Checkbox>
                        <Checkbox value="Desayuno">Desayuno 🥐</Checkbox>
                        <Checkbox value="Dientes Limpos">Lavarse los dientes 🪥</Checkbox>
                        <Checkbox value="Arreglado">Vestirse 👚</Checkbox>
                        <Checkbox value="Material Listo">Coger Mochila 🎒</Checkbox>
                        <Checkbox value="Casa Segura">Cerrar la puerta 🏡</Checkbox>
                    </CheckboxGroup>
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
