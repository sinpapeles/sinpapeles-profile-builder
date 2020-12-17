import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

export default ({ toggle, show, children, id, onRemove }) => {
    return (
        <div className="border m-2 p-3 rounded d-flex align-items-baseline">
            <div>
                <Form.Switch size="lg" id={`show-${id}`} checked={show} onClick={toggle} />
            </div>
            <div className="flex-grow-1">{children}</div>
            {onRemove && (
                <div className="ml-3 text-center">
                    <FontAwesomeIcon
                        icon={faTrash}
                        onClick={onRemove}
                        className="text-danger"
                        title="Remove"
                    />
                </div>
            )}
        </div>
    );
};
