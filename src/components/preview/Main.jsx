import { useStore } from '../../store/main';
import './Main.css';

export default params => {
    const [data] = useStore();
    return (
        <div className="main-viewer flex-grow-1 d-flex align-items-center flex-column">
            <div className="border border-dark rounded m-3 wrapper h-100">
                <sinpapeles-profile openNewPage data={JSON.stringify(data)}></sinpapeles-profile>
            </div>
        </div>
    );
};
