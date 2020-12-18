import { Col, Row } from 'react-bootstrap';

import Sample from './Sample';
import { useStore } from '../../../store/main';
import { setTheme } from '../../../store/actions';

export default ({ themes }) => {
    const [, dispatch] = useStore();

    const handleThemeClick = theme => {
        dispatch(setTheme(theme));
    };

    return (
        <Row>
            {themes.map((theme, key) => (
                <Col xs={4} key={key}>
                    <Sample {...theme} onClick={() => handleThemeClick(theme)} />
                </Col>
            ))}
        </Row>
    );
};
