import { Github, Linkedin, Mail } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { AnimatedSection } from '../components/AnimatedSection';
import ProPic from '../assets/hero.jpg';

export default function Home() {
  return (
    <PageLayout>
      <div className="text-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={ProPic}
              alt="Profile"
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-white/10 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 animate-pulse" />
          </div>
          
          <h1 className="mt-6 text-5xl font-bold gradient-text">
            Anupa Prabhasara
          </h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">
            Software Engineering Undergraduate
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Hi! I’m Anupa Prabhasara, a Software Engineering Undergraduate passionate about web development and software engineering. This site showcases my projects and ideas, blending technical skills with creative design to create user-friendly experiences.<br /><br />Join me as I explore how technology solves problems and improves lives. Let’s build something great together!
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
          <a
              href="https://github.com/anupaprabhasara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anupaprabhasara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@anupa.lk"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  );
}