// src/pages/Home.tsx
import Typewriter from '../components/Typewriter';
import DarkModeToggle from '../components/DarkModeToggle';
import FadeInSection from '../components/FadeInSection';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-gray-300 dark:bg-gray-900 text-center px-4">
      <div className='absolute top-4 right-4'>
        <DarkModeToggle />
      </div>
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Spencer Navas
      </h1>
      <h2 className='text-xl text-gray-600 dark:text-gray-400 mb-6'>
        <Typewriter text="Software Engineer &middot; Full Stack Developer &middot; Lifelong Learner" speed={75} />
      </h2>
      <div className="space-x-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Contact Me
        </a>
      </div>
      <FadeInSection>
        <h3 className="text-3xl font-semibold mt-10 dark:text-gray-400">My Projects</h3>
      </FadeInSection>

      {/* <div className="grid gap-8 mt-8">
        {projects.map(p => (
          <FadeInSection key={p.id}>
            <ProjectCard {...p} />
          </FadeInSection>
        ))}
      </div> */}
      <footer className="mt-5">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Spencer Navas. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
