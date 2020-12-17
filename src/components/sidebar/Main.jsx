import { useState } from 'react';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import Content from './Content';
import { useSmallScreen } from '../../hooks/useSmallScreen';
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
        <div className="sidebar bg-white p">
            <div className="header border-bottom p-5">Decentralized Link Profile</div>

            <div className="p-3">
                <Nav variant="tabs" fill activeKey={tab} onSelect={onSelectTab}>
                    <Nav.Item>
                        <Nav.Link eventKey="content">Content</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="themes">Themes</Nav.Link>
                    </Nav.Item>
                    {isSmallScreen && (
                        <Nav.Item>
                            <Nav.Link eventKey="preview">Preview</Nav.Link>
                        </Nav.Item>
                    )}
                </Nav>
            </div>

            <Content />
        </div>
    );
};
