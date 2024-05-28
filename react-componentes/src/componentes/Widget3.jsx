import React from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

const Widget3 = () => (
    <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <h1>Widget 3</h1>
        </CardHeader>
        <CardBody>
            <p>Descripción del Widget 3</p>
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

export default Widget3;