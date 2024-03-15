export const TabItem = ({ title, index, active, setActive }) => {
    const className = active ? 'border-bottom border-4 border-yellow' : 'border-none text-muted';

    return (
        <div className="nav-item px-2">
            <button onClick={() => setActive(title)} className="btn pt-7 pb-3">
                <span className={`text-decoration-underline ${active ? 'text-yellow' : 'text-muted'}`}>
                    {title.toUpperCase()}
                </span>
            </button>
        </div>

    )
}