export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 md:block md:pt-0"
    >
      <div className="absolute inset-0 bg-[#080b10] md:bg-[linear-gradient(90deg,#080b10_0%,#080b10_72%,#2798c5_72%,#2798c5_100%)]" />

      <div className="relative z-10 mb-8 flex justify-center md:absolute md:left-[72%] md:top-1/2 md:mb-0 md:h-[310px] md:w-[310px] md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="relative h-52 w-52 sm:h-64 sm:w-64 md:h-[310px] md:w-[310px] rounded-full bg-[#05070a] shadow-[0_26px_64px_rgba(0,0,0,0.55)] ring-8 ring-[#2798c5]/20 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <span className="text-white/15 text-6xl sm:text-7xl md:text-[88px] font-semibold select-none tracking-tight">ES</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto min-h-0 w-full max-w-6xl px-4 sm:px-6 md:min-h-screen md:px-8 md:flex md:items-center">
        <div className="w-full text-center md:w-[58%] md:text-left md:pt-8 md:pl-10 lg:pl-12">
          <p
            className="mb-1 text-white text-3xl md:text-[31px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hi, I’m
          </p>
          <h1
            className="mb-3 text-[#2798c5] text-4xl md:text-[40px] lg:text-[46px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ESWARI S
          </h1>
          <p className="mb-9 text-white/70 text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase">
            UI/UX Designer
          </p>
          <div className="flex gap-2.5 flex-wrap justify-center md:justify-start">
            <button
              onClick={() => handleScroll('#projects')}
              className="px-5 py-3 bg-[#2798c5] text-[#080b10] text-[10px] md:text-[11px] font-semibold rounded-lg hover:bg-[#197da8] transition-colors duration-200 shadow-[0_12px_26px_rgba(39,152,197,0.22)]"
            >
              View My Projects
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-[#2798c5] text-[#080b10] text-[10px] md:text-[11px] font-semibold rounded-lg hover:bg-[#197da8] transition-colors duration-200 shadow-[0_12px_26px_rgba(39,152,197,0.22)]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
