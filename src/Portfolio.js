import ProjectList from './ProjectList';
import useFetch from './useFetch';

const Portfolio = () => {
    const { data: projects, isPending, error } = useFetch('http://localhost:8000/projects?_sort=id&_order=desc');

    return (
        <div className="portfolio-container">
            <h2 className="page-title"><i class="fas fa-sort-down"></i> Portfolio</h2>
            {isPending && <div>Chargement...</div>}
            {error && <div>{error}</div>}
            {projects && <ProjectList projects={projects} />}
        </div>
    );
}

export default Portfolio;