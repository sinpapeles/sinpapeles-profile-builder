import Preview from './Preview';

import './Wrapper.css';

export default () => (
    <div className="main-viewer flex-grow-1 d-flex align-items-center flex-column">
        <div className="border border-dark rounded m-3 wrapper h-100">
            <Preview />
        </div>
    </div>
);
