import 'bootstrap/dist/css/bootstrap.min.css';
import { useSmallScreen } from './hooks/useSmallScreen';
import { StoreProvider } from './store/main';
import Sidebar from './components/sidebar/Main';
import Preview from './components/preview/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const isSmallScreen = useSmallScreen();

    return (
        <StoreProvider>
            <div className="App">
                <div className="builder">
                    <Sidebar />
                    {!isSmallScreen && <Preview />}
                </div>
            </div>
        </StoreProvider>
    );
}

export default App;
