import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
}

const projects: Project[] = [
  {
    title: 'Posters',
    description:
      'Designed visually appealing posters using Figma with creative layouts, attractive typography, and suitable color combinations. Focused on delivering clear messages through engaging and eye-catching designs.',
    image:
      'https://images.pexels.com/photos/11690683/pexels-photo-11690683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Poster design mockup',
    imageLeft: true,
  },
  {
    title: 'Website Designs',
    description:
      'Designed user-friendly website interfaces using Figma with clean layouts, attractive color palettes, and consistent typography. Focused on easy navigation, responsive design, and an engaging user experience.',
    image:
      'https://images.pexels.com/photos/17561470/pexels-photo-17561470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Website design mockup',
    imageLeft: false,
  },
  {
    title: 'Food Delivery App',
    description:
      'Designed a user-friendly food delivery app UI in Figma, making it easy for users to explore restaurants, browse menus, and discover their favorite dishes. Created a smooth ordering experience with simple navigation, attractive visuals, and an easy checkout process.',
    image:
      'https://images.pexels.com/photos/35052818/pexels-photo-35052818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Food delivery app UI',
    imageLeft: true,
  },
  {
    title: 'Mirror Me App',
    description:
      'Designed MirrorMe — AI-Powered Interview Coach, an app that helps job seekers prepare for interviews through personalized mock interviews and real-time feedback. Created a user-friendly interface to improve speaking skills, body language, confidence, and overall interview performance.',
    image:
      'https://images.pexels.com/photos/16229745/pexels-photo-16229745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Mirror Me app screens',
    imageLeft: false,
  },
  {
    title: 'Doctor Appointment Booking UI',
    description:
      'Designed a Doctor Appointment Booking App UI in Figma to help users find doctors, check availability, and book appointments easily. Created a user-friendly interface with doctor profiles, appointment scheduling, and booking confirmations for a smooth healthcare experience.',
    image:
      'https://images.pexels.com/photos/19957214/pexels-photo-19957214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Doctor appointment booking UI',
    imageLeft: true,
  },
];

function ProjectRow({ project }: { project: Project }) {
  const imgRef = useScrollAnimation<HTMLDivElement>();
  const textRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      className={`flex flex-col ${
        project.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-10 mb-20`}
    >
      {/* Image */}
      <div
        ref={imgRef}
        className={`${project.imageLeft ? 'fade-left' : 'fade-right'} flex-1 relative`}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '2px solid #f5a623',
            boxShadow: '0 0 30px rgba(245,166,35,0.15)',
          }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-64 md:h-72 object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div
        ref={textRef}
        className={`${project.imageLeft ? 'fade-right' : 'fade-left'} flex-1 text-center md:text-left`}
      >
        <h3
          className="text-white text-xl md:text-[20px] font-semibold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>
        <p className="text-white/70 text-[12px] md:text-[13px] leading-[1.45] mb-6">
          {project.description}
        </p>
        <button className="px-7 py-2.5 bg-[#f5a623] text-[#1a2332] text-[11px] font-semibold rounded hover:bg-[#d4891a] transition-colors duration-200 shadow-lg">
          View Project
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="projects" className="bg-[#1a2332] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="fade-up text-3xl md:text-[30px] font-semibold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My{' '}
          <span className="text-[#f5a623]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Projects
          </span>
        </h2>

        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
