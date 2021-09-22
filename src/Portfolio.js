import ProjectList from './ProjectList';
import useFetch from './useFetch';
require('dotenv').config();

console.log(process.env.REACT_APP_API_URL);
const Portfolio = () => {
    const { data: projects, isPending, error } = useFetch(`${process.env.REACT_APP_API_URL}/projects?_sort=id&_order=desc`);

    return (
        <div className="portfolio-container">
            <h2 className="page-title"><i className="fas fa-sort-down"></i> Portfolio</h2>
            {isPending && <div>Chargement...</div>}
            {error && <div>{error}</div>}
            {projects && <ProjectList projects={projects} />}
        </div>
    );
}

export default Portfolio;