import { useStore } from '../../store/main';
import Title from './editor/Title';
import Links from './editor/links/Main';

export default () => {
    const [data, dispatch] = useStore();

    return (
        <div>
            <Title />
            <Links />
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};
