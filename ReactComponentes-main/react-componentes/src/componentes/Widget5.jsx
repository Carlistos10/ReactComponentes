//Primero importamos lo necesario para el funcionamiento de la tarjeta y el widget
import React, { useState, useEffect, useRef } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

//Para usar los botones los importaremos de nextui, mientras que el cronometro lo realizaremos a mano
import { Button, ButtonGroup } from "@nextui-org/react";


const Widget5 = () => {

    //Creamos las contantes para cada botón
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const handleAction = (key) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(key);
        }, 1500);
    };

    //Aqui creamos el cronometro
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(timerRef.current);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    //Aqui le damos funciones los botonos con los valores de true o false
    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    //Indicamos como queremos que se muestren los milisegundos, segundos, minutos y horas
    const formatTime = (time) => {
        const milliseconds = time % 1000;
        const seconds = Math.floor(time / 1000) % 60;
        const minutes = Math.floor(time / 60000) % 60;
        const hours = Math.floor(time / 3600000);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    };

    return (
        //Usamos los componentes de nextui para crear la tarjeta y el widget
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Cronómetro ⌚</h1>
            </CardHeader>
            <hr />
            <CardBody>
                <div>
                    {/* Aqui situamos el cronometro con los botones que al hacer click realizan sus respectivas acciones */}
                    <div className='cronometro'>
                        <p className='reloj tiempo'>{formatTime(time)}</p>
                        <ButtonGroup className='cent'>
                            <Button onClick={handleStart} disabled={isRunning}>Iniciar</Button>
                            <Button onClick={handleStop} disabled={!isRunning}>Detener</Button>
                            <Button onClick={handleReset}>Reiniciar</Button>
                        </ButtonGroup>
                    </div>
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

export default Widget5;