import { useState } from 'react';
import md5 from 'md5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt';
import { Accordion, Button, Card, Form, Modal, useAccordionToggle } from 'react-bootstrap';

export default ({ show, onClose, value, onChange }) => {
    const [type, setType] = useState('upload');
    const [src, setSrc] = useState(value);
    const [email, setEmail] = useState();

    const handleEmailChange = e => {
        const newEmail = e.target.value;
        const hash = md5(newEmail, { encoding: 'binary' });

        setEmail(newEmail);
        setSrc(`https://www.gravatar.com/avatar/${hash}?d=mp&size=120`);
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

    const toBase64 = file =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

    const onUploadHandler = e => {
        const [file] = e.target.files;
        toBase64(file).then(setSrc);
    };

    const onSave = () => {
        onChange(src);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Update profile image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 text-center">
                    <img src={src} alt="Preview" className="img-thumbnail" />
                </div>

                <Accordion
                    activeKey={type}
                    onSelect={t => t && setType(t)}
                    className="mb-2 shadow-sm rounded-bottom"
                >
                    <Card>
                        <CustomToggle eventKey="upload">Upload</CustomToggle>

                        <Accordion.Collapse eventKey="upload">
                            <Card.Body>
                                <Form.Group controlId="upload" className="position-relative">
                                    <Form.Label className="btn btn-sm btn-primary shadow-sm mb-n3">
                                        <>
                                            <FontAwesomeIcon
                                                icon={faCloudUploadAlt}
                                                size="sm"
                                                className="text-white-50 mr-2"
                                            />
                                            Select file...
                                        </>
                                    </Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={onUploadHandler}
                                        className="position-absolute"
                                        style={{ top: 0, visibility: 'hidden' }}
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="gravatar">Gravatar</CustomToggle>

                        <Accordion.Collapse eventKey="gravatar">
                            <Card.Body>
                                <Form.Group controlId="gravatar">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <Form.Text>
                                        More info at{' '}
                                        <a
                                            href="https://gravatar.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            gravatar.com
                                        </a>
                                    </Form.Text>
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <CustomToggle eventKey="url">URL</CustomToggle>

                        <Accordion.Collapse eventKey="url">
                            <Card.Body>
                                <Form.Group controlId="url">
                                    <Form.Label>URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={src}
                                        onChange={e => setSrc(e.target.value)}
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
