import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt';
import { useStore } from '../../store/main';
import { importData } from '../../store/actions';

export default () => {
    const [, dispatch] = useStore();

    const read = file =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = event => resolve(event.target.result); // desired file content
            reader.onerror = error => reject(error);
            reader.readAsText(file);
        });

    const onUploadHandler = async e => {
        const [file] = e.target.files;
        read(file)
            .then(raw => JSON.parse(raw))
            .then(data => {
                if (!data.version) {
                    throw new Error('Invalid file');
                }

                dispatch(importData(data));
            })
            .catch(e => toast.error(e.message || 'Failed'));
    };

    return (
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
    );
};
