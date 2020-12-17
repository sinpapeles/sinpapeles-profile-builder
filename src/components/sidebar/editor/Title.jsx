import { Form } from 'react-bootstrap';
import { useStore } from '../../../store/main';
import { setTitle, toggleTitle } from '../../../store/actions';
import Box from './Box';
import InputText from '../../form/InputText';

export default () => {
    const [data, dispatch] = useStore();

    const handleChange = value => {
        dispatch(setTitle(value));
    };
    const handleToggle = () => {
        dispatch(toggleTitle());
    };

    return (
        <Box show={data.title.show} toggle={handleToggle}>
            <Form.Group className="mb-0">
                <InputText
                    value={data.title.text}
                    onChange={handleChange}
                    disabled={!data.title.show}
                />
            </Form.Group>
        </Box>
    );
};
