import { useStore } from '../../store/main';

export default () => {
    const [data] = useStore();
    return <sinpapeles-profile openNewPage data={JSON.stringify(data)}></sinpapeles-profile>;
};
