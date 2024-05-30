import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

import { Slider } from "@nextui-org/react";

const Widget4 = () => {

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
                <h1>Widget 4</h1>
            </CardHeader>
            <CardBody>
                <div className='satisfaccion'>
                    <p>¿Cómo me siento hoy?</p>
                    <p className='mal'>mal</p>
                    <p className='bien'>bien</p>
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

export default Widget4;