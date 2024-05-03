import { Button } from 'react-bootstrap';
import "./TabItem.css"
export const TabItem = ({ title, active, setActive }) => {
    const buttonClassName = `btn ${active ? 'shadow  border border-danger' : 'border-0 text-muted'}`;

    return (
        <div className="mx-auto align-items-center py-2 ">
            <div className="nav-item m-1 flex-grow-1 bg-body-secondary mx-2">
                <Button
                    variant="light"
                    className={buttonClassName}
                    onClick={() => setActive(title)}
                    style={{ paddingTop: '5px', paddingBottom: '3px' }}
                >
                    <b className={` ${active ? 'text-warning' : 'text-muted'}`}>
                        {title.toUpperCase()}
                    </b>
                </Button>
                
            </div>
        </div>
    );
};