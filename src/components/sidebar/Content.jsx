import { useStore } from '../../store/main';
import Image from './editor/image/Main';
import Title from './editor/Title';
import Bio from './editor/Bio';
import Links from './editor/links/Main';

export default () => {
    const [data, dispatch] = useStore();

    return (
        <div>
            <Image />
            <Title />
            <Bio />
            <Links />
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};
