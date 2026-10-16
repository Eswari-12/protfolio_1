import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  url: string;
}

const projects: Project[] = [
  {
    title: 'Posters',
    url: 'https://www.figma.com/design/I1H7gwAh9Mw4USgVu5e7Gr/Untitled?node-id=0-1&t=sBq3bSaAU2wGozJ1-1',
    description:
      'Designed visually appealing posters using Figma with creative layouts, attractive typography, and suitable color combinations. Focused on delivering clear messages through engaging and eye-catching designs.',
    image: '/images/posters.png',
    imageAlt: 'Poster design mockup',
    imageLeft: true,
  },
  {
    title: 'Websites',
    url: 'https://www.figma.com/design/UMotOHorB0gpYGHL7wezSC/Untitled?node-id=0-1&t=a0cavZbhklveHVAt-1',
    description:
      'Designed user-friendly website interfaces using Figma with clean layouts, attractive color palettes, and consistent typography. Focused on easy navigation, responsive design, and an engaging user experience.',
    image: '/images/website-designs.png',
    imageAlt: 'Website design mockup',
    imageLeft: false,
  },
  {
    title: 'Food Delivery App',
    url: 'https://www.figma.com/design/dxRx8dQNrd3AUK3PgLPViR/Untitled?t=LJtsHfvK1zeily3c-1',
    description:
      'Designed a user-friendly food delivery app UI in Figma, making it easy for users to explore restaurants, browse menus, and discover their favorite dishes. Created a smooth ordering experience with simple navigation, attractive visuals, and an easy checkout process.',
    image: '/images/food-delivery-app.png',
    imageAlt: 'Food delivery app UI',
    imageLeft: true,
  },
  {
    title: 'Mirror Me App',
    url: 'https://www.figma.com/design/QjCp6jAAGmAy1YxkmrZyVr/Untitled?node-id=0-1&t=LJtsHfvK1zeily3c-',
    description:
      'Designed MirrorMe — AI-Powered Interview Coach, an app that helps job seekers prepare for interviews through personalized mock interviews and real-time feedback. Created a user-friendly interface to improve speaking skills, body language, confidence, and overall interview performance.',
    image: '/images/mirror-me.png',
    imageAlt: 'Mirror Me app screens',
    imageLeft: false,
  },
  {
    title: 'Doctor Appointment Booking App',
    url: 'https://www.figma.com/design/toWATj4Mk8EIaU0ENJ0kJl/Untitled?node-id=0-1&t=LJtsHfvK1zeily3c-1',
    description:
      'Designed a Doctor Appointment Booking App UI in Figma to help users find doctors, check availability, and book appointments easily. Created a user-friendly interface with doctor profiles, appointment scheduling, and booking confirmations for a smooth healthcare experience.',
    image: '/images/doctor-booking.png',
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
          className="rounded-2xl overflow-hidden max-w-[420px] mx-auto md:mx-0"
          style={{
            border: '2px solid rgba(39,152,197,0.45)',
            boxShadow: '0 18px 32px rgba(10,14,20,0.18)',
          }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-48 md:h-56 object-cover"
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
        <p className="text-white/70 text-[12px] md:text-[13px] leading-[1.45] mb-6 max-w-[390px] mx-auto md:mx-0">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-7 py-2.5 bg-[#2798c5] text-[#080b10] text-[11px] font-semibold rounded hover:bg-[#197da8] transition-colors duration-200 shadow-[0_14px_24px_rgba(39,152,197,0.2)]"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="projects" className="bg-[#080b10] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="fade-up text-3xl md:text-[30px] font-semibold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My{' '}
          <span className="text-[#2798c5]" style={{ fontFamily: "'Playfair Display', serif" }}>
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
