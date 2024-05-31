import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

const Widget3 = () => {

    const [loading, setLoading] = useState(false);

    const handleAction = (key) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(key);
        }, 1500);
    };

    const [selected, setSelected] = React.useState([]);

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Rutina Mañanera 🌞</h1>
            </CardHeader>
            <hr />
            <CardBody>
                <div className="flex flex-col gap-3">
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
                <Listbox
                    aria-label="Actions"
                    onAction={handleAction}
                >
                    <ListboxItem className='guardar' key="Widget Guardado ✅">Guardar Widget 💾</ListboxItem>
                </Listbox>
                {loading && <CircularProgress label="Loading..." />}
            </CardBody>
            <Divider />
        </Card>
    );
};

export default Widget3;
