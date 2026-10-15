import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Internship {
  title: string;
  description: string;
}

const internships: Internship[] = [
  {
    title: 'UI/UX Design Intern | Amdox Technology | 3 Months [April 2026 - July 2026]',
    description:
      'Designed the UI/UX for a Doctor Appointment Booking App, focusing on simplifying the patient journey — from searching for a doctor to booking and managing appointments. Contributed to wireframes, high-fidelity screens, and interactive prototypes in Figma. Completed the internship with a certification.',
  },
  {
    title: 'UI/UX Design Intern | Xplore Intellects | 3 Months [Aug 2026 - Oct 2026]',
    description:
      'Designed MirrorMe, an AI-powered mock interview app that helps job seekers practice interviews with real-time feedback on body language, eye contact, and speaking skills. Led the end-to-end design process — user research, personas, information architecture, wireframes, and high-fidelity prototypes.',
  },
];

function InternshipCard({ intern, index }: { intern: Internship; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="fade-up rounded-2xl p-8 mb-6"
      style={{
        transitionDelay: `${index * 0.15}s`,
        background: 'rgba(30,25,15,0.6)',
        border: '1px solid rgba(245,166,35,0.5)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.3)',
      }}
    >
      <h3 className="text-white text-base md:text-lg font-semibold mb-4 leading-snug">
        {intern.title}
      </h3>
      <p className="text-white/65 text-sm leading-relaxed text-center">
        {intern.description}
      </p>
    </div>
  );
}

export default function Internships() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="internship" className="bg-[#1a2332] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="fade-up text-4xl md:text-5xl font-semibold text-center mb-14"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My{' '}
          <span className="text-[#f5a623]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Internships
          </span>
        </h2>

        {internships.map((intern, i) => (
          <InternshipCard key={i} intern={intern} index={i} />
        ))}
      </div>
    </section>
  );
}
