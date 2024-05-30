import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

import { Switch } from "@nextui-org/react";


const Widget3 = () => {

    const [loading, setLoading] = useState(false);

    const handleAction = (key) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(key);
        }, 1500);
    };

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Widget 7</h1>
            </CardHeader>
            <CardBody>
                <div className='flex flex-col gap-3 esp'>
                    <Switch defaultSelected color="success">WiFi</Switch>
                    <Switch defaultSelected color="success">Datos Móviles</Switch>
                    <Switch defaultSelected color="success">Bluetooth</Switch>
                    <Switch defaultSelected color="warning">Ahorro de batería</Switch>
                </div>
                <Listbox
                    aria-label="Actions"
                    onAction={handleAction}
                >
                    <ListboxItem className='guardar' key="Widget Guardado">Guardar Widget</ListboxItem>
                </Listbox>
                {loading && <CircularProgress label="Loading..." />}
            </CardBody>
            <Divider />
        </Card>
    );
};

export default Widget3;
