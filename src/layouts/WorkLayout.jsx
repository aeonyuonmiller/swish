const WorkLayout = ({ title, date, color, children }) => (
    <div style={{ backgroundColor: color }}>
        <header>
            <h1>{title}</h1>
            <p>{date}</p>
        </header>
        <article>{children}</article>
    </div>
);

export default WorkLayout;
