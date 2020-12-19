import { useToggle } from 'react-use';
import { Button, Modal } from 'react-bootstrap';

export default () => {
    const [show, toggle] = useToggle();

    return (
        <>
            <small className="ml-2" style={{ cursor: 'pointer' }} onClick={toggle}>
                About.
            </small>
            <Modal show={show} onHide={toggle} backdrop="static" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Sinpapeles Profile Builder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This is an open source and truly decentralised project.</p>

                    <h2 className="h4">Profile</h2>
                    <p>
                        This is the "viewer". It uses the settings you provided and displays it as a
                        nice profile page. It produces a web-component that can be embeded in
                        webpage.
                        <br />
                        <a href="http://github.com/falci/sinpapeles-profile">Github</a>
                    </p>

                    <h2 className="h4">Profile Builder</h2>
                    <p>
                        This project helps you to generate the data for the viewer.
                        <br />
                        The generated webpage can be downloaded and used as you wish. There's also a
                        feature to automatically upload it to{' '}
                        <a href="http://siasky.net/">siasky.net</a>.
                        <br />
                        <a href="http://github.com/falci/sinpapeles-profile-builder">Github</a>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggle}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
