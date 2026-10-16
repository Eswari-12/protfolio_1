import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Internship {
  period: string;
  company: string;
  title: string;
  description: string;
  certificateUrl?: string;
}

const internships: Internship[] = [
  {
    period: 'APR 2026 — JUL 2026',
    company: 'Amdox Technology',
    title: 'UI/UX Design Intern',
    description:
      'Designed the UI/UX for a doctor appointment booking app, from user flows and wireframes to high-fidelity screens and interactive prototypes.',
    certificateUrl: '/certificate.pdf',
  },
  {
    period: 'AUG 2026 — OCT 2026',
    company: 'Xplore Intellects',
    title: 'UI/UX Design Intern',
    description:
      'Led the end-to-end design process for MirrorMe, an AI-powered mock interview app focused on real-time feedback and confidence-building.',
  },
];

function InternshipCard({ intern, index }: { intern: Internship; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="fade-up mb-6 border border-[#2798c5]/70 bg-[#111820] p-6 md:p-8"
      style={{
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)_auto] md:items-center md:gap-8">
        <div>
          <div className="mb-5 text-[#2798c5] text-[9px] md:text-[10px] font-medium tracking-[0.12em] uppercase">
            {intern.period}
          </div>
          <h3 className="text-white text-[22px] md:text-[27px] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {intern.title}
          </h3>
        </div>

        <div>
          <h4 className="mb-3 text-white text-[14px] md:text-[17px] font-semibold leading-tight">
            {intern.company}
          </h4>
          <p className="text-white/75 text-[8px] md:text-[11px] leading-[1.6]">
            {intern.description}
          </p>
        </div>

        <div className="md:text-right">
          {intern.certificateUrl ? (
            <a
              href={intern.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#2798c5] px-4 py-2 text-[8px] md:text-[9px] font-medium tracking-[0.12em] uppercase text-[#2798c5] transition-colors hover:bg-[#2798c5] hover:text-[#080b10]"
            >
              View Certificate
            </a>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center border border-[#2798c5] px-4 py-2 text-[8px] md:text-[9px] font-medium tracking-[0.12em] uppercase text-[#2798c5]"
            >
              View Certificate
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Internships() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="internship" className="bg-[#080b10] py-20 px-6">
      <div className="mx-auto w-full max-w-[1768px]">
        <h2
          ref={titleRef}
          className="fade-up text-3xl md:text-[30px] font-semibold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My{' '}
          <span className="text-[#2798c5]" style={{ fontFamily: "'Playfair Display', serif" }}>
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
