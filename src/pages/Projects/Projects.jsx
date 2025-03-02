import { useEffect, useState } from "react";

export default function ProjectsLanding() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Gallardo7761/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="container mt-5 mb-5 text-white">
      <h1 className="text-center text-dark mb-4">Mis Proyectos en GitHub</h1>
      <p className="text-center text-muted mb-4">
        Aquí puedes ver algunos de los proyectos en los que he trabajado. 🚀
      </p>
      <div className="row">
        {repos.map((repo) => (
          <div key={repo.id} className="col-md-6 col-lg-4 mb-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card bg-dark text-white shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{repo.name}</h5>
                  <p className="card-text text-light">
                    {repo.description || "Sin descripción"}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
