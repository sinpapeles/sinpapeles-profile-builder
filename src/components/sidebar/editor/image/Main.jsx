import { Form } from 'react-bootstrap';
import { useToggle } from 'react-use';
import cn from 'classnames';
import { useStore } from '../../../../store/main';
import {
    updateImage,
    removeImage,
    toggleImage,
    toggleImageFormat,
    toggleImageBorder,
} from '../../../../store/actions';
import Box from '../Box';
import ModalEdit from './ModalEdit';
import RemoveBtn from '../../../buttons/Remove';
import EditBtn from '../../../buttons/Edit';

export default () => {
    const [{ image }, dispatch] = useStore();
    const [modal, toggleModal] = useToggle(false);

    const handleToggle = () => {
        dispatch(toggleImage());
    };

    const handleChange = url => {
        dispatch(updateImage(url));
    };

    const handleRemove = () => {
        dispatch(removeImage());
    };

    const handleToggleFormat = () => {
        dispatch(toggleImageFormat());
    };

    const handleToggleBorder = () => {
        dispatch(toggleImageBorder());
    };

    const classNames = cn('img-fluid', {
        'img-thumbnail': image.border,
        'rounded-circle': image.circle,
    });

    const format = cn('border rounded bg-primary ml-3 d-inline-block', classNames);

    return (
        <>
            <ModalEdit
                show={modal}
                onClose={toggleModal}
                value={image.src}
                onChange={handleChange}
            />
            <Box id="image" show={image.show} toggle={handleToggle}>
                <div className="d-flex">
                    <div className="text-center flex-grow-1 mr-2">
                        <img
                            src={image.src}
                            alt="Profile picture"
                            className={classNames}
                            style={{ maxWidth: '90%' }}
                        />
                    </div>
                    <div className="d-flex flex-column" style={{ minWidth: 110 }}>
                        <div>
                            <Form.Label onClick={handleToggleFormat}>
                                Format
                                <span style={{ height: 20, width: 20 }} className={format} />
                            </Form.Label>
                        </div>
                        <div>
                            <Form.Label onClick={handleToggleFormat}>
                                Border
                                <Form.Switch
                                    size="lg"
                                    className="ml-3 d-inline-block"
                                    id={`profile-image-border`}
                                    checked={image.border}
                                    onClick={handleToggleBorder}
                                />
                            </Form.Label>
                        </div>
                        <div className="text-center">
                            <EditBtn className="mr-2" onClick={toggleModal} />
                            <RemoveBtn onClick={handleRemove} />
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
};
