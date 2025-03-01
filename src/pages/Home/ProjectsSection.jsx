import { motion } from 'framer-motion';

const ProjectsSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="h3 fw-bold mb-4 text-center">Mis Proyectos Favoritos</h2>
        <div className="row g-4">
          {[
            { title: 'US-2FA-AutoFill', desc: 'Gestor de código TOTP para el SSO de la US.' },
            { title: 'Huertos Bellavista', desc: 'App web de gestión para la asoc. Huertos La Salud - Bellavista.' },
            { title: 'Amodgus', desc: 'Mod de Minecraft (Forge >= 1.18.2) para introducir al Amongus (sus).' },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;