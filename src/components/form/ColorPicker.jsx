import { useRef, useState } from 'react';
import { useToggle } from 'react-use';
import { Saturation, EditableInput, Hue } from 'react-color/lib/components/common';
import { CustomPicker } from 'react-color';
import tinycolor from 'tinycolor2';

import './ColorPicker.css';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

export default ({ value, onChange, title = 'Color picker' }) => {
    const [show, toggle] = useToggle();
    const color = tinycolor(value);
    const hex = `#${color.toHex()}`;

    const handleSaturationChange = hsv => {
        onChange(`#${tinycolor(hsv).toHex()}`);
    };

    const handleHueChange = hue => {
        onChange(`#${tinycolor(hue).toHex()}`);
    };

    const inputStyles = {
        input: {
            marginLeft: 12,
        },
        label: {
            fontSize: '12px',
            color: '#999',
        },
    };

    return (
        <div className="ColorPicker">
            <OverlayTrigger
                rootClose
                onHide={toggle}
                show={show}
                trigger="click"
                key="color-picker"
                placement="auto"
                overlay={
                    <Popover id="popover-color-picker">
                        <Popover.Title as="h3">{title}</Popover.Title>
                        <Popover.Content className="p-0">
                            <div className="ColorPicker saturation">
                                <Saturation
                                    hsl={color.toHsl()}
                                    hsv={color.toHsv()}
                                    onChange={handleSaturationChange}
                                />
                            </div>
                            <div style={{ minHeight: 10, position: 'relative', margin: 2 }}>
                                <Hue
                                    hsl={color.toHsl()}
                                    onChange={handleHueChange}
                                    direction="horizontal"
                                />
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <span
                                    style={{
                                        color: 'gray',
                                        fontSize: 13,
                                        marginRight: 3,
                                        marginTop: 2,
                                        marginLeft: 3,
                                    }}
                                >
                                    Hex
                                </span>
                                <EditableInput
                                    style={inputStyles}
                                    value={hex}
                                    onChange={handleHueChange}
                                />
                            </div>
                            <div className="border-top mt-2 p-2 text-right">
                                <Button size="sm" variant="primary" onClick={toggle}>
                                    Close
                                </Button>
                            </div>
                        </Popover.Content>
                    </Popover>
                }
            >
                <div
                    className="d-flex align-items-center pointer"
                    onClick={toggle}
                    style={{ width: 95 }}
                >
                    <div
                        className="square border border-dark rounded mr-2"
                        style={{ backgroundColor: hex }}
                    ></div>
                    <span>{hex}</span>
                </div>
            </OverlayTrigger>
        </div>
    );
};
