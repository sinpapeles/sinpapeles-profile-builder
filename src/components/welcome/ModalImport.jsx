import { useState } from 'react';
import md5 from 'md5';
import { Accordion, Button, Card, Form, Modal, useAccordionToggle } from 'react-bootstrap';
import ImportFile from './ImportFile';
import ImportUrl from './ImportUrl';
import ImportPaste from './ImportPaste';

export default ({ show, onClose }) => {
    const [type, setType] = useState('upload');
    const [value, setValue] = useState('');
    const [email, setEmail] = useState();

    const handleEmailChange = e => {
        const newEmail = e.target.value;
        const hash = md5(newEmail, { encoding: 'binary' });

        setEmail(newEmail);
    };

    const CustomToggle = ({ children, eventKey, small }) => {
        const decoratedOnClick = useAccordionToggle(eventKey);

        return (
            <Card.Header onClick={decoratedOnClick}>
                <input type="radio" name="type" defaultChecked={type === eventKey} />
                <h6 className="m-0 d-inline ml-2 font-weight-bold text-primary cursor-pointer">
                    {children}
                </h6>
                {small && <small className="ml-2">{small}</small>}
            </Card.Header>
        );
    };

    const onSave = () => {
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Import profile</Modal.Title>
            </Modal.Header>

            <Accordion
                activeKey={type}
                onSelect={t => t && setType(t)}
                className="shadow-sm rounded-bottom"
            >
                <Card className="rounded-0 border-top-0">
                    <CustomToggle eventKey="upload">From file</CustomToggle>

                    <Accordion.Collapse eventKey="upload">
                        <Card.Body>
                            <ImportFile />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <CustomToggle eventKey="url">From URL</CustomToggle>

                    <Accordion.Collapse eventKey="url">
                        <Card.Body>
                            <ImportUrl />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="rounded-0 border-bottom-0">
                    <CustomToggle eventKey="paste">From Clipboard</CustomToggle>

                    <Accordion.Collapse eventKey="paste">
                        <Card.Body>
                            <ImportPaste />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Modal.Footer>
                <Button variant="link" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
