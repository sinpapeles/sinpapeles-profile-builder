import FontPicker from 'font-picker-react';
import { useStore } from '../../../store/main';
import { setTheme } from '../../../store/actions';

import './Main.css';

export default () => {
    const [{ theme }, dispatch] = useStore();

    const handleChange = font => {
        dispatch(setTheme({ font }));
    };

    const onChange = selected => {
        const id = selected.family.replace(/ /g, '+');
        return handleChange({
            url: `https://fonts.googleapis.com/css2?family=${id}&display=swap`,
            family: selected.family,
        });
    };

    return (
        <div className="apply-font">
            <FontPicker
                apiKey="AIzaSyDqLp6EW2NlRpywlrkzsgiXbesW8irdJak"
                activeFontFamily={theme.font.family}
                onChange={onChange}
            />
        </div>
    );
};
