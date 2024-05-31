import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";
import { parseDate } from '@internationalized/date';
import { CircularProgress } from "@nextui-org/react";

const Widget1 = () => {
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
                <p>Calendario 🗓️</p>
            </CardHeader>
            <hr />
            <CardBody>
                <div>
                    <Calendar aria-label="Date" defaultValue={parseDate("2024-06-15")} className='dia' />
                </div>
                <Listbox
                    aria-label="Actions"
                    onAction={handleAction}
                >
                    <ListboxItem className='guardar' key="Widget Guardado ✅">Guardar Widget  💾</ListboxItem>
                </Listbox>
                {loading && <CircularProgress label="Loading..." />}
            </CardBody>
            <Divider />
        </Card>
    );
};

export default Widget1;
