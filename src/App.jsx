import 'bootstrap/dist/css/bootstrap.min.css';
import { useSmallScreen } from './hooks/useSmallScreen';
import { StoreProvider } from './store/main';
import Sidebar from './components/sidebar/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const isSmallScreen = useSmallScreen();

    return (
        <StoreProvider>
            <div className="App">
                <div className="builder">
                    <Sidebar />
                    {!isSmallScreen && <div className="main-viewer">MAIN VIEW</div>}
                </div>
            </div>
        </StoreProvider>
    );
}

export default App;
