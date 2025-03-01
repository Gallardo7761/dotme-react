import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import InterestsSection from './InterestsSection';

const Home = () => {
  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(to bottom right, #f8f9fa, #dee2e6)' }}>
      <main className="container-fluid">
        <AboutSection />
        <ProjectsSection />
        <InterestsSection />
      </main>
    </div>
  );
};

export default Home;