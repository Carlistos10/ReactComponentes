import React, { useState, useEffect } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

const Widget3 = () => {
    const [checkedCount, setCheckedCount] = useState(0);

    useEffect(() => {
        const checkboxes = document.querySelectorAll('.checkbox');
        const updateCount = () => {
            const checkedCount = document.querySelectorAll('.checkbox:checked').length;
            setCheckedCount(checkedCount);
        };

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateCount);
        });

        return () => {
            checkboxes.forEach(checkbox => {
                checkbox.removeEventListener('change', updateCount);
            });
        };
    }, []);

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Widget 3</h1>
            </CardHeader>
            <CardBody>
                <div className='comidas'>
                    <div className='esp'>
                        <input type='checkbox' className="checkbox" /> Desayuno
                    </div>
                    <div className='esp'>
                        <input type='checkbox' className="checkbox" /> Media Mañana
                    </div>
                    <div className='esp'>
                        <input type='checkbox' className="checkbox" /> Comida
                    </div>
                    <div className='esp'>
                        <input type='checkbox' className="checkbox" /> Merienda
                    </div>
                    <div className='esp'>
                        <input type='checkbox' className="checkbox" /> Cena
                    </div>
                    <div className='esp'>
                        <div id="count">Comidas realizadas: {checkedCount}</div>
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

export default Widget3;
