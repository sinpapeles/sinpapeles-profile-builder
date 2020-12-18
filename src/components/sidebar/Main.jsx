import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import Switch, { Case } from 'react-switch-case';
import { useSmallScreen } from '../../hooks/useSmallScreen';
import Content from './Content';
import Theme from './Theme';
import './Main.css';

export default () => {
    const isSmallScreen = useSmallScreen();
    const [tab, setTab] = useState('content');

    const onSelectTab = tab => {
        if (tab !== 'preview') {
            setTab(tab);
        }
    };

    return (
        <div className="sidebar bg-white p d-flex flex-column">
            <div className="header border-bottom p-5">Decentralized Link Profile</div>

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
                </Switch>
            </div>
            <div className="shadow p-3 border-top">
                <Button block>Next</Button>
            </div>
        </div>
    );
};
