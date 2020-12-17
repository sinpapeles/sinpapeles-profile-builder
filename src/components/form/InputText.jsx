import { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useToggle } from 'react-use';

export default ({ value, onChange, disabled, ...props }) => {
    const [editing, toggleEditing] = useToggle();
    const input = useRef(null);

    useEffect(() => {
        input.current && input.current.select();
    }, [editing]);

    if (!editing || disabled) {
        return (
            <Form.Control
                plaintext
                readOnly
                value={value}
                className={`flex-grow-1 ${disabled && 'text-black-50'}`}
                onClick={() => toggleEditing(!disabled)}
                {...props}
            />
        );
    }

    return (
        <Form.Control
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            onBlur={() => toggleEditing()}
            ref={input}
            {...props}
        />
    );
};
