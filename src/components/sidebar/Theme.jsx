import Colors from './colors/Main';
import Font from './font/Main';

export default () => {
    return (
        <div className="px-2 pt-3">
            <h4>Colors</h4>
            <Colors />
            <h4 className="mt-3">Font Family</h4>
            <Font />
        </div>
    );
};
