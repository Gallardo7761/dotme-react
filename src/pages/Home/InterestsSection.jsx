import { motion } from 'framer-motion';

const InterestsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="h3 fw-bold mb-4 text-center">Intereses</h2>
        <div className="row g-3">
          {['Informática', 'Electrónica', 'Videojuegos', 'Música', 'Animanga', 'Ciberseguridad'].map((interest, index) => (
            <motion.div
              key={interest}
              className="col-md-4 col-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-3 bg-white rounded shadow-sm">
                {interest}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;