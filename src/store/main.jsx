import { useState } from 'react';
import { createReducerContext } from 'react-use';
import reducer from './reducer';

const [useStore, StoreProvider] = createReducerContext(reducer, {
    title: {
        show: true,
        text: 'Title',
    },
    links: {},
});

export { useStore, StoreProvider };
