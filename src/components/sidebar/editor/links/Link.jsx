import { useStore } from '../../../../store/main';
import { toggleLink, updateLink, removeLink } from '../../../../store/actions';
import Box from '../Box';
import { Form } from 'react-bootstrap';
import InputText from '../../../form/InputText';

export default ({ id }) => {
    const [data, dispatch] = useStore();
    const link = data.links[id];

    const handleToggle = () => {
        dispatch(toggleLink(id));
    };

    const handleRemove = () => {
        dispatch(removeLink(id));
    };

    const onChangeText = text => {
        dispatch(updateLink(id, { text }));
    };
    const onChangeHref = href => {
        dispatch(updateLink(id, { href }));
    };

    return (
        <Box id={id} show={link.show} toggle={handleToggle} onRemove={handleRemove}>
            <Form.Group className="mb-0">
                <InputText value={link.text} onChange={onChangeText} disabled={!link.show} />
            </Form.Group>
            <Form.Group className="mb-0">
                <InputText value={link.href} onChange={onChangeHref} disabled={!link.show} />
            </Form.Group>
        </Box>
    );
};
