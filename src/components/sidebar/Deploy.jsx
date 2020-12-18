import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Download from './deploy/Download';
import SIA from './deploy/SIA';

export default () => {
    const [type, setType] = useState('download');
    return (
        <Accordion activeKey={type} onSelect={t => t && setType(t)} className="p-2">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="download">
                    <h6 className="m-0 d-inline ml-2 font-weight-bold text-primary cursor-pointer">
                        Download files
                    </h6>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="download">
                    <Card.Body>
                        <Download />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="sia">
                    <h6 className="m-0 d-inline ml-2 font-weight-bold text-primary cursor-pointer">
                        Upload to SIA
                    </h6>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="sia">
                    <Card.Body>
                        <SIA />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};
