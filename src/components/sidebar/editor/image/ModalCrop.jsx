import ReactCrop from 'react-image-crop';
import { Button, Modal } from 'react-bootstrap';
import { useRef, useState } from 'react';

import 'react-image-crop/dist/ReactCrop.css';
import { useCroppedImage } from '../../../../hooks/useCroppedImage';

export default ({ show, onClose, value, onChange }) => {
    const [crop, setCrop] = useState({ aspect: 1, height: 120, width: 120 });
    const ref = useRef(null);
    const cropped = useCroppedImage(ref.current, crop);

    const onImageLoaded = image => {
        ref.current = image;
    };

    const onSave = () => {
        onChange(cropped);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose} size="lg" backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Crop image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Preview</h3>
                <div style={{ width: 120, height: 120 }} className="border rounded mb-2">
                    {!!cropped && (
                        <img
                            src={cropped}
                            alt="Preview"
                            className="img-fluid"
                            style={{ width: 120, height: 120 }}
                        />
                    )}
                </div>
                <div className="">
                    <h3>Original</h3>
                    <ReactCrop
                        onImageLoaded={onImageLoaded}
                        src={value}
                        crop={crop}
                        onChange={newCrop => setCrop(newCrop)}
                        className="border rounded"
                        ref={ref}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onSave}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
