import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

export default props => (
    <Button size="sm" variant="outline-danger" {...props}>
        <FontAwesomeIcon icon={faTrash} title="Remove" />
    </Button>
);
