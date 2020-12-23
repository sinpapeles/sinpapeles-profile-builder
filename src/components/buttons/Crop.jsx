import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrop } from '@fortawesome/free-solid-svg-icons/faCrop';

export default props => (
    <Button size="sm" variant="outline-primary" {...props}>
        <FontAwesomeIcon icon={faCrop} title="Crop" />
    </Button>
);
