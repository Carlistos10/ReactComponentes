import React, { useEffect, useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";



const Widget2 = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        const horas = String(date.getHours()).padStart(2, "0");
        const minutos = String(date.getMinutes()).padStart(2, "0");
        const segundos = String(date.getSeconds()).padStart(2, "0");
        return `${horas}:${minutos}:${segundos}`
    }

    return (

        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Widget 2</h1>
            </CardHeader>
            <CardBody>
                <div className='reloj'>
                    <div className='tiempo'>
                        {formatTime(time)}
                    </div>
                </div>
                <Listbox
                    aria-label="Actions"
                    onAction={(key) => alert(key)}
                >
                    <ListboxItem className='guardar' key="Widget Guardado">Guardar Widget</ListboxItem>
                </Listbox>
            </CardBody>
            <Divider />
        </Card>
    );
};

export default Widget2;