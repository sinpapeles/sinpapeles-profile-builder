import { Form } from 'react-bootstrap';
import { useStore } from '../../../store/main';
import { setBio, toggleBio } from '../../../store/actions';
import Box from './Box';
import InputText from '../../form/InputText';

export default () => {
    const [data, dispatch] = useStore();

    const handleChange = value => {
        dispatch(setBio(value));
    };
    const handleToggle = () => {
        dispatch(toggleBio());
    };

    return (
        <Box id="bio" show={data.bio.show} toggle={handleToggle}>
            <Form.Group className="mb-0">
                <InputText
                    as={'textarea'}
                    rows={3}
                    value={data.bio.text}
                    onChange={handleChange}
                    disabled={!data.bio.show}
                />
            </Form.Group>
        </Box>
    );
};
