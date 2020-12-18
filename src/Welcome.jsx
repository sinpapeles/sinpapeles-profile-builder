import { Button } from 'react-bootstrap';
import { useToggle } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt';
import ModalImport from './components/welcome/ModalImport';

import newProfile from './components/welcome/newProfile.json';
import { useStore } from './store/main';
import { importData } from './store/actions';

console.log({ newProfile });

export default () => {
    const [, dispatch] = useStore();
    const [show, toggle] = useToggle();

    const createNew = () => {
        dispatch(importData(newProfile));
    };

    return (
        <>
            <div className="App welcome d-flex flex-column justify-content-between align-items-center">
                <div />
                <div className="title text-center">
                    <text className="logo">Sinpapeles</text>
                    <br />
                    Profile Builder
                </div>
                <div>
                    <Button size="lg" onClick={createNew}>
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        Create
                    </Button>
                    <Button size="lg" className="ml-2" onClick={toggle}>
                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />
                        Import
                    </Button>
                </div>
                <div className="mb-2">
                    <small>A truly fully decentralised open source profile generator.</small>
                </div>
            </div>
            <ModalImport show={show} onClose={toggle} />
        </>
    );
};
