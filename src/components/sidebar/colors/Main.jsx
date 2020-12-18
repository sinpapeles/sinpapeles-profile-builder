import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Switch, { Case } from 'react-switch-case';
import Custom from './Custom';
import ShowThemes from './ShowThemes';

import gradient from '../themes/gradient.json';
import solid from '../themes/solid.json';

export default () => {
    const [type, setType] = useState('gradient');

    return (
        <div>
            <Nav variant="pills" className="mb-2" activeKey={type} onSelect={setType}>
                <Nav.Item>
                    <Nav.Link eventKey="gradient">Gradient</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="solid">Solid</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="custom">Custom</Nav.Link>
                </Nav.Item>
            </Nav>

            <Switch condition={type}>
                <Case value="gradient">
                    <ShowThemes themes={gradient} />
                </Case>
                <Case value="solid">
                    <ShowThemes themes={solid} />
                </Case>
                <Case value="custom">
                    <Custom />
                </Case>
            </Switch>
        </div>
    );
};
