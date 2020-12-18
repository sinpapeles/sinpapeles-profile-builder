import './Sample.css';

export default ({ background, color, onClick }) => (
    <div
        className="square mb-3 border border-dark rounded "
        style={{ background }}
        onClick={onClick}
    >
        <div className="content d-flex justify-content-around flex-column p-3">
            <div className="block" style={{ borderColor: color }} />
            <div className="block" style={{ borderColor: color }} />
        </div>
    </div>
);
