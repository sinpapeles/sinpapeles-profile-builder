import { useState } from 'react';
import { createReducerContext } from 'react-use';
import reducer from './reducer';

const [useStore, StoreProvider] = createReducerContext(reducer, {
    image: {
        show: true,
        circle: true,
        border: true,
        src: 'https://www.gravatar.com/avatar/0?d=mp',
    },
    title: {
        show: true,
        text: 'Title',
    },
    links: {},
});

export { useStore, StoreProvider };
