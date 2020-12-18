import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt';

export default () => {
    return (
        <div>
            <Button className="shadow-sm">
                <FontAwesomeIcon icon={faCloudUploadAlt} size="sm" className="mr-2" />
                Upload to SIA
            </Button>
            <Form.Text>
                Sia is the leading decentralized cloud storage platform. Sia leverages blockchain
                technology to create a data storage marketplace that is more robust and more
                affordable than traditional cloud storage providers.{' '}
                <a href="https://sia.tech/" target="_blank" rel="noopener noreferrer">
                    More info
                </a>
                .
            </Form.Text>
        </div>
    );
};
