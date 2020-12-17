import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';

export default props => (
    <Button size="sm" variant="outline-primary" {...props}>
        <FontAwesomeIcon icon={faPencilAlt} title="Edit" />
    </Button>
);
