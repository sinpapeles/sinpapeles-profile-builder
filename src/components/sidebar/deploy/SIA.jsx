import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
import { useFiles } from '../../../hooks/useFiles';
import { useState } from 'react';

export default () => {
    const files = useFiles();
    const [loading, setLoading] = useState(false);
    const [sia, setSia] = useState('');

    const onClick = () => {
        const formData = new FormData();
        files.forEach(file => formData.append('files[]', file));

        setLoading(true);
        fetch(`https://siasky.net/skynet/skyfile?filename=profile`, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(({ skylink }) => {
                setSia(skylink);
            })
            .catch(error => toast.error(error))
            .finally(() => setLoading(false));
    };

    return (
        <div>
            {sia && (
                <div>
                    <span>This is your sia link:</span>
                    <pre>
                        <code style={{ whiteSpace: 'break-spaces' }}>sia://{sia}</code>
                    </pre>
                    <a href={`https://siasky.net/${sia}`}>View your profile live</a>
                </div>
            )}
            {!sia && (
                <>
                    <Button className="shadow-sm" onClick={onClick} disabled={loading}>
                        <FontAwesomeIcon
                            icon={loading ? faSpinner : faCloudUploadAlt}
                            spin={loading}
                            size="sm"
                            className="mr-2"
                        />
                        Upload to SIA
                    </Button>
                    <Form.Text>
                        Sia is the leading decentralized cloud storage platform. Sia leverages
                        blockchain technology to create a data storage marketplace that is more
                        robust and more affordable than traditional cloud storage providers.{' '}
                        <a href="https://sia.tech/" target="_blank" rel="noopener noreferrer">
                            More info
                        </a>
                        .
                    </Form.Text>
                </>
            )}
        </div>
    );
};
