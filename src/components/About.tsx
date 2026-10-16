import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const textRef = useScrollAnimation<HTMLParagraphElement>();
  const btnRef = useScrollAnimation<HTMLDivElement>();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="bg-[#080b10] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="fade-up text-3xl md:text-[30px] font-semibold mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About{' '}
          <span className="text-[#2798c5]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Me
          </span>
        </h2>

        <p
          ref={textRef}
          className="fade-up text-white/75 text-[16px] md:text-[16px] leading-relaxed mb-12"
          style={{ transitionDelay: '0.15s' }}
        >
          "I'm a UI/UX designer who believes great design should feel invisible — intuitive enough
          that users never have to think twice. I focus on turning complex problems into simple,
          accessible interfaces through research, wireframing, and iterative prototyping in Figma.
          When I'm not designing, I'm exploring how color, typography, and motion shape the way
          people feel about a product. I love solving real problems for real people, one thoughtful
          interaction at a time."
        </p>

        <div
          ref={btnRef}
          className="fade-up"
          style={{ transitionDelay: '0.3s' }}
        >
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3 bg-[#2798c5] text-[#080b10] text-[11px] font-semibold rounded hover:bg-[#197da8] transition-colors duration-200 shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
