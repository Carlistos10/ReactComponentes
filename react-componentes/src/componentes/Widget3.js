import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

const Widget1 = () => (
    <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <h1>Widget 3</h1>
        </CardHeader>
        <CardBody>
            <p>Descripción del Widget 3</p>
        </CardBody>
        <Divider />
    </Card>
);

export default Widget1;