import { Link, useParams } from "react-router-dom";
import useFetch from './useFetch';

const ProjectDetails = () => {
    const { id } = useParams();
    const { data: project, isPending, error } = useFetch(`http://localhost:8000/projects/${id}`);

    return (
        <div className="project-details">
            <Link to="/portfolio" className="portfolio-back"><i class="fas fa-long-arrow-alt-left"></i> Retour au portfolio</Link>
            {isPending && <div>Chargement...</div>}
            {error && <div>{error}</div>}
            {project && (
                <article>
                    <span className="project-stack">{`${project.category} - ${project.language}`}</span>
                    <h2 className="project-title">{project.title} <a href={project.repo} className="project-link"><i class="fab fa-github"></i></a></h2>
                    <div className="project-desc">{project.description}</div>
                    {project.illustration.includes('.mp4') ? (
                        <video src={project.illustration} className="project-vid" muted loop autoPlay></video>
                    ) : (
                        <img src={project.illustration} alt={`Exemple ${project.title}`} className="project-pic" />
                    )}
                </article>
            )}
        </div>
    );
}

export default ProjectDetails;