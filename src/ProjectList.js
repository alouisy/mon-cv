import { Link } from "react-router-dom";
require('dotenv').config();

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list">
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <span className="project-stack">{`${project.category} - ${project.language}`}</span>
                        <h2 className="project-title">{project.title}</h2>
                        {project.illustration.includes('.mp4') ? (
                            <video src={`${process.env.REACT_APP_URL}${project.illustration}`} className="project-vid" muted loop autoPlay></video>
                        ) : (
                            <img src={`${process.env.REACT_APP_URL}${project.illustration}`} alt={`Exemple ${project.title}`} className="project-pic" />
                        )}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;