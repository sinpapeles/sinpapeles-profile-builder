import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useStore } from '../../store/main';
import { importData } from '../../store/actions';
import { useState } from 'react';

export default () => {
    const [, dispatch] = useStore();
    const [url, setUrl] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const location = url.endsWith('/data.json') ? url : `${url}/data.json`;

        fetch(location, { mode: 'no-cors' })
            .then(res => res.json())
            .then(data => {
                if (!data.version) {
                    throw new Error('Invalid file');
                }

                dispatch(importData(data));
            })
            .catch(e => toast.error(e.message || 'Failed'));
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="upload" className="position-relative">
                <Form.Label>URL</Form.Label>
                <Form.Control
                    type="url"
                    required
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
            </Form.Group>
            <Button size="sm" type="submit" className="shadow-sm">
                Import
            </Button>
        </Form>
    );
};
