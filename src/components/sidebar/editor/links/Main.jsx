import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { useStore } from '../../../../store/main';
import { addLink } from '../../../../store/actions';
import Link from './Link';

export default () => {
    const [data, dispatch] = useStore();

    const handleAddLink = () => {
        dispatch(addLink());
    };

    const links = Object.keys(data.links);

    return (
        <div>
            {links.map(id => (
                <Link id={id} key={id} />
            ))}
            <div className="px-2">
                <Button block variant="outline-primary" size="lg" onClick={handleAddLink}>
                    <FontAwesomeIcon icon={faPlus} className="mr-2" size="sm" />
                    Add Link
                </Button>
            </div>
        </div>
    );
};
