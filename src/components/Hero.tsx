export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Reference-matched 70/30 split */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1a2332_0%,#1a2332_70%,#f5a623_70%,#f5a623_100%)]" />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-6xl px-8 flex items-center">
        <div className="w-full md:w-[58%] pt-16 md:pt-8">
          <p
            className="mb-1 text-white text-3xl md:text-[29px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hi, I’m
          </p>
          <h1
            className="mb-3 text-[#f5a623] text-4xl md:text-[35px] font-normal leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ESWARI S
          </h1>
          <p className="mb-9 text-white/70 text-[11px] font-semibold tracking-wide">
            UI/UX Designer
          </p>
          <div className="flex gap-2.5 flex-wrap">
            <button
              onClick={() => handleScroll('#projects')}
              className="px-4 py-3 bg-[#f5a623] text-[#1a2332] text-[10px] font-semibold rounded-lg hover:bg-[#d4891a] transition-colors duration-200 shadow-lg"
            >
              View My Projects
            </button>
            <button
              className="px-8 py-3 bg-[#f5a623] text-[#1a2332] text-[10px] font-semibold rounded-lg hover:bg-[#d4891a] transition-colors duration-200 shadow-lg"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Still profile placeholder centered on the color boundary */}
        <div className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-64 w-64 md:h-[255px] md:w-[255px] rounded-full bg-black shadow-[0_14px_40px_rgba(0,0,0,0.28)] flex items-center justify-center">
            <span className="text-white/15 text-6xl font-semibold select-none">ES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
