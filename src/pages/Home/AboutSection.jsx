import { motion } from 'framer-motion';
import '../../css/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-circle overflow-hidden mx-auto shadow-lg" style={{ width: '300px', height: '300px' }}>
              <motion.img
                src="https://avatars.githubusercontent.com/u/100301878?v=4"
                alt="Avatar"
                className="w-100 h-100 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="h3 fw-bold mb-3">Sobre Mí</h2>
            <p className="text-muted mb-4">
              Soy un estudiante de Ingeniería de Computadores en la Universidad de Sevilla, en mi tercer año. 
              Me apasionan la informática, la electrónica, los videojuegos, la música y el animanga. 
              Actualmente estoy explorando ciberseguridad y participando en proyectos como Hack4Change.
            </p>
            <div className="d-flex flex-wrap gap-2">
              {['React', 'Java', 'Python', 'FastAPI', 'MariaDB', 'C/C++', 'Arduino'].map((skill) => (
                <motion.span
                  key={skill}
                  className="badge px-3 py-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;