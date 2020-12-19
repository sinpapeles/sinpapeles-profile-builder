import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Switch, { Case } from 'react-switch-case';
import { useSmallScreen } from './hooks/useSmallScreen';
import { StoreProvider, useStore } from './store/main';
import Sidebar from './components/sidebar/Main';
import Preview from './components/preview/Wrapper';
import Welcome from './Welcome';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Router = () => {
    const isSmallScreen = useSmallScreen();
    const [data] = useStore();

    return (
        <Switch condition={!!data.version}>
            <Case value={true}>
                <div className="builder">
                    <Sidebar />
                    {!isSmallScreen && <Preview />}
                </div>
            </Case>
            <Case value={false}>
                <Welcome />
            </Case>
        </Switch>
    );
};

function App() {
    return (
        <StoreProvider>
            <div className="App">
                <Router />
            </div>
            <ToastContainer />
        </StoreProvider>
    );
}

export default App;
