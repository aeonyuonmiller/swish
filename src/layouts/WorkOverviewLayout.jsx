const WorksOverviewLayout = ({ title, date, color, children }) => (
    <div style={{ backgroundColor: color }}>
        <header>
            <h1>{title}</h1>
            <p>{date}</p>
        </header>
        <main>{children}</main>
    </div>
);

export default WorksOverviewLayout;
