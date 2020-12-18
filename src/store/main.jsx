import { createReducerContext } from 'react-use';
import reducer from './reducer';

import themes from '../components/sidebar/themes/gradient.json';

const [useStore, StoreProvider] = createReducerContext(reducer, {
    image: {
        show: true,
        circle: true,
        border: true,
        src: 'https://www.gravatar.com/avatar/0?d=mp&size=120',
    },
    title: {
        show: true,
        text: 'My Name',
    },
    bio: { show: false, text: 'Bio...' },
    links: {},
    theme: {
        ...themes[0],
        font: {
            family: 'Ubuntu',
            url: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
    },
});

export { useStore, StoreProvider };
