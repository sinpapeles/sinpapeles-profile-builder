import { useState } from 'react';
import { Accordion, Card, Nav } from 'react-bootstrap';

import { useStore } from '../../store/main';
import Colors from './colors/Main';

export default () => {
    const [type, setType] = useState('color');
    const [{ theme }, dispatch] = useStore();

    return (
        <Accordion activeKey={type} onSelect={setType} className="px-2">
            <Card>
                <Accordion.Toggle as={Card.Header} className="bg-info text-white" eventKey="color">
                    Colors
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="color" className="p-2">
                    <Colors />
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} className="bg-info text-white" eventKey="font">
                    Font
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="font" className="p-2">
                    <span>TODO</span>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};
