import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useStore } from '../../store/main';
import { importData } from '../../store/actions';
import { useState } from 'react';

export default () => {
    const [, dispatch] = useStore();
    const [data, setdata] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        Promise.resolve()
            .then(() => JSON.parse(data))
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
            <Form.Group controlId="paste" className="position-relative">
                <Form.Label>Data</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    required
                    value={data}
                    onChange={e => setdata(e.target.value)}
                />
            </Form.Group>
            <Button size="sm" type="submit" className="shadow-sm">
                Import
            </Button>
        </Form>
    );
};
