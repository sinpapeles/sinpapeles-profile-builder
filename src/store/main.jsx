import { createReducerContext } from 'react-use';
import reducer from './reducer';

const [useStore, StoreProvider] = createReducerContext(reducer, {});

export { useStore, StoreProvider };
