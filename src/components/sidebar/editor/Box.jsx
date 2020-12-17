import { Form } from 'react-bootstrap';
import RemoveBtn from '../../buttons/Remove';

export default ({ toggle, show, children, id, onRemove }) => {
    return (
        <div className="border m-2 p-3 rounded d-flex align-items-baseline">
            <div>
                <Form.Switch size="lg" id={`show-${id}`} checked={show} onClick={toggle} />
            </div>
            <div className="flex-grow-1">{children}</div>
            {onRemove && <RemoveBtn onClick={onRemove} />}
        </div>
    );
};
