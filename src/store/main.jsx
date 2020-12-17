import { useState } from 'react';
import { createReducerContext } from 'react-use';
import reducer from './reducer';

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
});

export { useStore, StoreProvider };
