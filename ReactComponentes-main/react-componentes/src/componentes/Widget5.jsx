import React, { useState, useEffect, useRef } from 'react';
import './Widgets.css';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";

import { Button, ButtonGroup } from "@nextui-org/react";


const Widget5 = () => {

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

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const milliseconds = time % 1000;
        const seconds = Math.floor(time / 1000) % 60;
        const minutes = Math.floor(time / 60000) % 60;
        const hours = Math.floor(time / 3600000);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    };

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <h1>Widget 5</h1>
            </CardHeader>
            <CardBody>
                <div>
                    <div className='cronometro'>
                        <p className='reloj tiempo'>{formatTime(time)}</p>
                        <ButtonGroup className='cent'>
                            <Button onClick={handleStart} disabled={isRunning}>Iniciar</Button>
                            <Button onClick={handleStop} disabled={!isRunning}>Detener</Button>
                            <Button onClick={handleReset}>Reiniciar</Button>
                        </ButtonGroup>
                    </div>


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

export default Widget5;