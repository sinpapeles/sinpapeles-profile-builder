import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import Switch, { Case, Default } from 'react-switch-case';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import Content from './Content';
import Theme from './Theme';
import Deploy from './Deploy';
import './Main.css';

export default () => {
    const isSmallScreen = useSmallScreen();
    const [tab, setTab] = useState('deploy');

    const onSelectTab = tab => {
        if (tab !== 'preview') {
            setTab(tab);
        }
    };

    const showNext = tab !== 'deploy';

    return (
        <div className="sidebar bg-white p d-flex flex-column">
            <div
                className="header border-bottom p-3 bg-primary text-white"
                style={{ fontSize: '1.5rem' }}
            >
                <span className="logo pr-2" style={{ fontSize: '2.2rem' }}>
                    Sinpapeles
                </span>
                Profile Builder
            </div>

            <div className="pt-3 px-3">
                <Nav
                    variant="tabs"
                    className="border-bottom-0"
                    fill
                    activeKey={tab}
                    onSelect={onSelectTab}
                >
                    <Nav.Item>
                        <Nav.Link eventKey="content">Content</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="theme">Themes</Nav.Link>
                    </Nav.Item>
                    {isSmallScreen && (
                        <Nav.Item>
                            <Nav.Link eventKey="preview">Preview</Nav.Link>
                        </Nav.Item>
                    )}
                    <Nav.Item>
                        <Nav.Link eventKey="deploy">Deploy</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div className="overflow-auto border-top pb-3 flex-grow-1">
                <Switch condition={tab}>
                    <Case value="content">
                        <Content />
                    </Case>
                    <Case value="theme">
                        <Theme />
                    </Case>
                    <Case value="deploy">
                        <Deploy />
                    </Case>
                </Switch>
            </div>
            {showNext && (
                <div className="shadow p-3 border-top">
                    <Switch condition={tab}>
                        <Case value="content">
                            <Button block onClick={() => setTab('theme')}>
                                Next: theme
                            </Button>
                        </Case>
                        <Default>
                            <Button block onClick={() => setTab('deploy')}>
                                Next: deploy
                            </Button>
                        </Default>
                    </Switch>
                </div>
            )}
        </div>
    );
};
