import { Form } from 'react-bootstrap';
import { setTheme } from '../../../store/actions';
import { useStore } from '../../../store/main';
import ColorPicker from '../../form/ColorPicker';

export default () => {
    const [{ theme }, dispatch] = useStore();

    const handleBackground = background => {
        dispatch(setTheme({ ...theme, background }));
    };
    const handleForeground = color => {
        dispatch(setTheme({ ...theme, color }));
    };
    return (
        <div className="border rounded px-2 pt-2 mb-3">
            <Form.Group controlId="Background">
                <Form.Label>Background</Form.Label>
                <ColorPicker
                    title="Background"
                    value={theme.background}
                    onChange={handleBackground}
                />
            </Form.Group>
            <Form.Group controlId="Foreground">
                <Form.Label>Foreground</Form.Label>
                <ColorPicker title="Foreground" value={theme.color} onChange={handleForeground} />
            </Form.Group>
        </div>
    );
};
