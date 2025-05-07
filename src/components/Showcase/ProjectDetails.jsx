import { useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <div className="project-detail">
      <h1 className="project-detail__title">Project {id}</h1>
      <p className="project-detail__text">
        More details about this project{id}...
      </p>
      <Link to="/" className="project-detail__link">
        Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetails;
