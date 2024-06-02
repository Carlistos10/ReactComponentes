//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

//Hay que añadir estos imports para poder crear una tabla
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const Widget1 = () => {

    //Aqui creamos el contenido que va a tener cada fila
    const rows = [
        {
            key: "1",
            hora: "8:15 - 9:10",
            lunes: "DIW",
            martes: "DAW",
            miercoles: "DWES",
            jueves: "DAW",
            viernes: "DWES"
        },
        {
            key: "2",
            hora: "9:10 - 10:05",
            lunes: "DIW",
            martes: "DWES",
            miercoles: "DWES",
            jueves: "DAW",
            viernes: "DWES"
        },
        {
            key: "3",
            hora: "10:05 - 11:00",
            lunes: "EIE",
            martes: "DWES",
            miercoles: "DWES",
            jueves: "DWEC",
            viernes: "DIW"
        },
        {
            key: "4",
            hora: "11:00 - 11:30",
            lunes: "Descanso",
            martes: "Descanso",
            miercoles: "Descanso",
            jueves: "Descanso",
            viernes: "Descanso"
        },
        {
            key: "5",
            hora: "11:30 - 12:25",
            lunes: "EIE",
            martes: "DWEC",
            miercoles: "EIE",
            jueves: "DWEC",
            viernes: "DIW"
        },
        {
            key: "5",
            hora: "12:25 - 13:20",
            lunes: "DWES",
            martes: "DWEC",
            miercoles: "DAW",
            jueves: "DIW",
            viernes: "DWEC"
        },
        {
            key: "6",
            hora: "13:20 - 14:15",
            lunes: "DWES",
            martes: "DWEC",
            miercoles: "DAW",
            jueves: "DIW",
            viernes: "DWEC"
        }
    ];

    //Indicamos el nombre de las columnas con sus keys para que recojan correctamente los datos
    const columns = [
        {
            key: "hora",
            label: "Horario",
        },
        {
            key: "lunes",
            label: "Lunes",
        },
        {
            key: "martes",
            label: "Martes",
        },
        {
            key: "miercoles",
            label: "Miercoles",
        },
        {
            key: "jueves",
            label: "Jueves",
        },
        {
            key: "viernes",
            label: "Viernes",
        }
    ];

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
                <h1>Horario 📓</h1>
            </CardHeader>
            <hr />
            <CardBody>
                <div>
                    {/* Aqui indicamos la forma de la tabla y donde va cada dato */}
                    <Table aria-label="tabla">
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
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

export default Widget1;
